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
      <CardHeader className="relative p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-party bg-clip-text text-transparent mb-3">
              {title}
            </CardTitle>
            <div className="space-y-2">
              <p className="text-base md:text-lg font-semibold text-party-purple">
                {birthdayPerson}, {age} anos
              </p>
              <p className="text-sm text-muted-foreground">
                Tema: {theme}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-party-pink text-white self-start">
            Confirmada
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-4 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-purple/10 flex-shrink-0">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-party-purple" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm md:text-base">{date}</p>
              <p className="text-lg md:text-xl font-bold text-party-purple">{time}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-blue/10 flex-shrink-0">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-party-blue" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm md:text-base">Local</p>
              <p className="text-xs md:text-sm text-muted-foreground break-words">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-yellow/10 flex-shrink-0">
              <Gift className="h-4 w-4 md:h-5 md:w-5 text-party-orange" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm md:text-base">Pacote</p>
              <p className="text-xs md:text-sm text-muted-foreground">{packageName}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-party-pink/10 flex-shrink-0">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-party-pink" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm md:text-base">Convidados</p>
              <p className="text-xs md:text-sm text-muted-foreground">{guests} pessoas</p>
              <p className="text-xs md:text-sm font-medium text-party-pink">{tickets} Ingressos (tipo {ticketType})</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartyCard;