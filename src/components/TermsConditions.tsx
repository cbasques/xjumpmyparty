import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, FileCheck, FileClock, FileX, User, Phone, Mail, MapPin, CreditCard } from "lucide-react";

interface ContractInfo {
  status: "pending" | "sent" | "signed" | "rejected";
}

interface ContractorInfo {
  fullName: string;
  cpf: string;
  email: string;
  whatsapp: string;
  address: string;
}

interface TermsConditionsProps {
  contract: ContractInfo;
  contractor: ContractorInfo;
}

const TermsConditions = ({ contract, contractor }: TermsConditionsProps) => {
  const getContractStatusBadge = (status: ContractInfo["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-party-orange border-party-orange">Pendente</Badge>;
      case "sent":
        return <Badge className="bg-party-blue text-white">Enviado</Badge>;
      case "signed":
        return <Badge className="bg-green-500 text-white">Assinado</Badge>;
      case "rejected":
        return <Badge variant="destructive">Recusado</Badge>;
    }
  };

  const getContractStatusIcon = (status: ContractInfo["status"]) => {
    switch (status) {
      case "pending":
        return <FileClock className="h-4 w-4 text-party-orange" />;
      case "sent":
        return <FileText className="h-4 w-4 text-party-blue" />;
      case "signed":
        return <FileCheck className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <FileX className="h-4 w-4 text-destructive" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Card do Contratante */}
      <Card className="shadow-card hover:shadow-party transition-party">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 rounded-full bg-gradient-fun">
              <User className="h-5 w-5 text-white" />
            </div>
            Contratante
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-party-purple/10 flex-shrink-0">
                <User className="h-4 w-4 text-party-purple" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">Nome Completo</p>
                <p className="text-sm text-muted-foreground break-words">{contractor.fullName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-party-blue/10 flex-shrink-0">
                <CreditCard className="h-4 w-4 text-party-blue" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">CPF</p>
                <p className="text-sm text-muted-foreground">{contractor.cpf}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-party-pink/10 flex-shrink-0">
                <Mail className="h-4 w-4 text-party-pink" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">Email</p>
                <p className="text-sm text-muted-foreground break-words">{contractor.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-party-yellow/10 flex-shrink-0">
                <Phone className="h-4 w-4 text-party-orange" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-sm text-muted-foreground">{contractor.whatsapp}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 md:col-span-2">
              <div className="p-2 rounded-full bg-party-blue/10 flex-shrink-0">
                <MapPin className="h-4 w-4 text-party-blue" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">Endereço</p>
                <p className="text-sm text-muted-foreground break-words">{contractor.address}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card do Contrato */}
      <Card className="shadow-card hover:shadow-party transition-party">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 rounded-full bg-gradient-fun">
              <FileText className="h-5 w-5 text-white" />
            </div>
            Contrato
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-muted/50 transition-party">
              <div className="flex items-center gap-3">
                {getContractStatusIcon(contract.status)}
                <div>
                  <h4 className="font-medium">Contrato de Prestação de Serviços</h4>
                  <p className="text-sm text-muted-foreground">
                    Contrato de prestação de serviços para festa infantil
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getContractStatusBadge(contract.status)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsConditions;