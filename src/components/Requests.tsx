import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Camera, Car, Package, Building, Settings } from "lucide-react";

interface Request {
  id: string;
  type: "parking" | "setup_time" | "teardown_time" | "photographer" | "package_upgrade" | "other";
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "in_review";
  priority: "low" | "medium" | "high";
}

interface RequestsProps {
  requests: Request[];
}

const Requests = ({ requests }: RequestsProps) => {
  const getTypeIcon = (type: Request["type"]) => {
    switch (type) {
      case "parking":
        return <Car className="h-4 w-4 text-party-blue" />;
      case "setup_time":
        return <Clock className="h-4 w-4 text-party-purple" />;
      case "teardown_time":
        return <Clock className="h-4 w-4 text-party-purple" />;
      case "photographer":
        return <Camera className="h-4 w-4 text-party-pink" />;
      case "package_upgrade":
        return <Package className="h-4 w-4 text-party-orange" />;
      case "other":
        return <Settings className="h-4 w-4 text-party-yellow" />;
    }
  };

  const getStatusBadge = (status: Request["status"]) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500 text-white">Pendente</Badge>;
      case "approved":
        return <Badge className="bg-green-500 text-white">Aprovada</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejeitada</Badge>;
      case "in_review":
        return <Badge className="bg-party-blue text-white">Em Análise</Badge>;
    }
  };

  const getPriorityBadge = (priority: Request["priority"]) => {
    switch (priority) {
      case "low":
        return <Badge variant="outline" className="text-green-600 border-green-600">Baixa</Badge>;
      case "medium":
        return <Badge variant="outline" className="text-party-yellow border-party-yellow">Média</Badge>;
      case "high":
        return <Badge variant="outline" className="text-red-600 border-red-600">Alta</Badge>;
    }
  };

  if (requests.length === 0) {
    return (
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-500/10">
              <Settings className="h-5 w-5 text-green-500" />
            </div>
            Solicitações Especiais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhuma solicitação especial</p>
            <p className="text-sm text-green-500 mt-2">✅ Tudo conforme o pacote padrão!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-party-blue/10">
              <Settings className="h-5 w-5 text-party-blue" />
            </div>
            Solicitações Especiais
          </div>
          <Badge className="bg-party-blue text-white">
            {requests.length} solicitações
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="flex items-start justify-between p-4 rounded-lg border-l-4 border-party-blue bg-card/50">
              <div className="flex items-start gap-3 flex-1">
                {getTypeIcon(request.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{request.title}</h4>
                    {getPriorityBadge(request.priority)}
                  </div>
                  <p className="text-sm text-foreground">{request.description}</p>
                </div>
              </div>
              {getStatusBadge(request.status)}
            </div>
          ))}
          
          <div className="mt-6 p-4 rounded-lg bg-party-blue/5 border border-party-blue/20">
            <p className="text-sm text-party-blue font-medium">
              📋 Nossa equipe está analisando suas solicitações e entrará em contato em breve com o status de cada uma.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Requests;