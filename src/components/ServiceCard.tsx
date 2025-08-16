import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  status: "included" | "extra" | "pending";
  price?: number;
  category: string;
}

interface ServiceCardProps {
  title: string;
  services: Service[];
}

const ServiceCard = ({ title, services }: ServiceCardProps) => {
  const getStatusBadge = (status: Service["status"]) => {
    switch (status) {
      case "included":
        return <Badge className="bg-green-500 text-white">Incluído</Badge>;
      case "extra":
        return <Badge className="bg-party-orange text-white">Extra</Badge>;
      case "pending":
        return <Badge variant="outline">Pendente</Badge>;
    }
  };

  const getStatusIcon = (status: Service["status"]) => {
    switch (status) {
      case "included":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "extra":
        return <Star className="h-4 w-4 text-party-orange" />;
      case "pending":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <div className="p-2 rounded-full bg-gradient-fun">
            <Star className="h-5 w-5 text-white" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-muted/50 transition-party">
              <div className="flex items-center gap-3">
                {getStatusIcon(service.status)}
                <div>
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{service.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {service.price && (
                  <span className="text-sm font-medium text-party-purple">
                    +R$ {service.price}
                  </span>
                )}
                {getStatusBadge(service.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;