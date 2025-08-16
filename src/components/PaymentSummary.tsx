import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, DollarSign, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

interface Payment {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: "paid" | "pending" | "overdue";
  method?: "pix" | "card" | "transfer" | "cash";
}

interface PaymentSummaryProps {
  totalAmount: number;
  payments: Payment[];
}

const PaymentSummary = ({ totalAmount, payments }: PaymentSummaryProps) => {
  const totalPaid = payments
    .filter(payment => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const remainingAmount = totalAmount - totalPaid;
  const progressPercentage = (totalPaid / totalAmount) * 100;

  const getStatusIcon = (status: Payment['status']) => {
    switch (status) {
      case 'paid':
        return <CheckCircle2 className="h-4 w-4 text-party-blue" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-party-orange" />;
      case 'overdue':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'paid':
        return 'bg-party-blue/10 text-party-blue border-party-blue/20';
      case 'pending':
        return 'bg-party-orange/10 text-party-orange border-party-orange/20';
      case 'overdue':
        return 'bg-destructive/10 text-destructive border-destructive/20';
    }
  };

  const getMethodIcon = (method?: Payment['method']) => {
    switch (method) {
      case 'pix':
        return '💳';
      case 'card':
        return '💳';
      case 'transfer':
        return '🏦';
      case 'cash':
        return '💵';
      default:
        return '💰';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  return (
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-party-pink/10">
            <DollarSign className="h-6 w-6 text-party-pink" />
          </div>
          Resumo Financeiro
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-party/10 border border-party-purple/20">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-5 w-5 text-party-purple" />
              <span className="text-sm font-medium text-party-purple">Valor Total</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {formatCurrency(totalAmount)}
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-party-blue/10 border border-party-blue/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-party-blue" />
              <span className="text-sm font-medium text-party-blue">Pago</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {formatCurrency(totalPaid)}
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-party-orange/10 border border-party-orange/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-party-orange" />
              <span className="text-sm font-medium text-party-orange">Restante</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {formatCurrency(remainingAmount)}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progresso do Pagamento</span>
            <span className="text-sm text-muted-foreground">
              {progressPercentage.toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={progressPercentage} 
            className="h-3"
          />
        </div>

        {/* Payment List */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Detalhes dos Pagamentos</h4>
          <div className="space-y-3">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(payment.status)}
                    {payment.method && (
                      <span className="text-lg">{getMethodIcon(payment.method)}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{payment.description}</p>
                    <p className="text-sm text-muted-foreground">
                      Vencimento: {payment.dueDate}
                      {payment.paidDate && (
                        <span className="text-party-blue ml-2">
                          • Pago em {payment.paidDate}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">
                    {formatCurrency(payment.amount)}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(payment.status)}`}
                  >
                    {payment.status === 'paid' ? 'Pago' : 
                     payment.status === 'pending' ? 'Pendente' : 'Vencido'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;