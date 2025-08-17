import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Gift } from "lucide-react";

interface PartyCardProps {
  title: string;
  birthdayPerson: string;
  age: number;
  theme: string;
  date: string;
  time: string;
  location: string;
  package: string;
  guests: number;
  tickets: number;
  ticketType: string;
}

const PartyCard = ({ title, birthdayPerson, age, theme, date, time, location, package: packageName, guests, tickets, ticketType }: PartyCardProps) => {
  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-party transition-party group">
      <div className="absolute inset-0 bg-gradient-party opacity-5 group-hover:opacity-10 transition-party" />
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-party bg-clip-text text-transparent">
              {title}
            </CardTitle>
            <div className="mt-2 space-y-1">
              <p className="text-lg font-semibold text-party-purple">
                {birthdayPerson}, {age} anos
              </p>
              <p className="text-sm text-muted-foreground">
                Tema: {theme}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-party-pink text-white">
            Confirmada
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-purple/10">
              <Calendar className="h-5 w-5 text-party-purple" />
            </div>
            <div>
              <p className="font-medium">{date}</p>
              <p className="text-lg font-bold text-party-purple">{time}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-blue/10">
              <MapPin className="h-5 w-5 text-party-blue" />
            </div>
            <div>
              <p className="font-medium">Local</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-yellow/10">
              <Gift className="h-5 w-5 text-party-orange" />
            </div>
            <div>
              <p className="font-medium">Pacote</p>
              <p className="text-sm text-muted-foreground">{packageName}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-pink/10">
              <Users className="h-5 w-5 text-party-pink" />
            </div>
            <div>
              <p className="font-medium">Convidados</p>
              <p className="text-sm text-muted-foreground">{guests} pessoas</p>
              <p className="text-sm font-medium text-party-pink">{tickets} Ingressos (tipo {ticketType})</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartyCard;