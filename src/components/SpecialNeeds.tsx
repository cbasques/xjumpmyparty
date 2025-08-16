import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Heart, Utensils, Accessibility } from "lucide-react";

interface SpecialNeed {
  id: string;
  type: "allergy" | "dietary" | "medical" | "accessibility";
  description: string;
  severity: "low" | "medium" | "high";
  guestName: string;
}

interface SpecialNeedsProps {
  specialNeeds: SpecialNeed[];
}

const SpecialNeeds = ({ specialNeeds }: SpecialNeedsProps) => {
  const getTypeIcon = (type: SpecialNeed["type"]) => {
    switch (type) {
      case "allergy":
        return <AlertTriangle className="h-4 w-4 text-party-orange" />;
      case "dietary":
        return <Utensils className="h-4 w-4 text-party-blue" />;
      case "medical":
        return <Heart className="h-4 w-4 text-party-pink" />;
      case "accessibility":
        return <Accessibility className="h-4 w-4 text-party-purple" />;
    }
  };

  const getTypeLabel = (type: SpecialNeed["type"]) => {
    switch (type) {
      case "allergy":
        return "Alergia";
      case "dietary":
        return "Alimentar";
      case "medical":
        return "Médica";
      case "accessibility":
        return "Acessibilidade";
    }
  };

  const getSeverityBadge = (severity: SpecialNeed["severity"]) => {
    switch (severity) {
      case "low":
        return <Badge className="bg-green-500 text-white">Baixa</Badge>;
      case "medium":
        return <Badge className="bg-party-yellow text-white">Média</Badge>;
      case "high":
        return <Badge variant="destructive">Alta</Badge>;
    }
  };

  if (specialNeeds.length === 0) {
    return (
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-500/10">
              <Heart className="h-5 w-5 text-green-500" />
            </div>
            Necessidades Especiais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhuma necessidade especial informada</p>
            <p className="text-sm text-green-500 mt-2">✅ Tudo certo para a festa!</p>
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
            <div className="p-2 rounded-full bg-party-orange/10">
              <AlertTriangle className="h-5 w-5 text-party-orange" />
            </div>
            Necessidades Especiais
          </div>
          <Badge className="bg-party-orange text-white">
            {specialNeeds.length} itens
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {specialNeeds.map((need) => (
            <div key={need.id} className="flex items-start justify-between p-4 rounded-lg border-l-4 border-party-orange bg-card/50">
              <div className="flex items-start gap-3">
                {getTypeIcon(need.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{getTypeLabel(need.type)}</h4>
                    <span className="text-sm text-muted-foreground">• {need.guestName}</span>
                  </div>
                  <p className="text-sm text-foreground">{need.description}</p>
                </div>
              </div>
              {getSeverityBadge(need.severity)}
            </div>
          ))}
          
          <div className="mt-6 p-4 rounded-lg bg-party-orange/5 border border-party-orange/20">
            <p className="text-sm text-party-orange font-medium">
              ⚠️ Nossa equipe já foi informada sobre todas as necessidades especiais e tomará os cuidados necessários durante a festa.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialNeeds;