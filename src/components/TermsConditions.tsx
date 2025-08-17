import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, FileCheck, FileClock, FileX } from "lucide-react";

interface ContractInfo {
  status: "pending" | "sent" | "signed" | "rejected";
}

interface TermsConditionsProps {
  contract: ContractInfo;
}

const TermsConditions = ({ contract }: TermsConditionsProps) => {
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
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <div className="p-2 rounded-full bg-gradient-fun">
            <FileText className="h-5 w-5 text-white" />
          </div>
          Termos & Condições
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-muted/50 transition-party">
            <div className="flex items-center gap-3">
              {getContractStatusIcon(contract.status)}
              <div>
                <h4 className="font-medium">Contrato</h4>
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
  );
};

export default TermsConditions;