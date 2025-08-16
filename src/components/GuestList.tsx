import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, UserCheck, UserX, Baby } from "lucide-react";

interface Guest {
  id: string;
  name: string;
  age?: number;
  status: "confirmed" | "pending" | "declined";
  type: "adult" | "child";
  specialNeeds?: string;
}

interface GuestListProps {
  guests: Guest[];
}

const GuestList = ({ guests }: GuestListProps) => {
  const getStatusBadge = (status: Guest["status"]) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500 text-white">Confirmado</Badge>;
      case "pending":
        return <Badge variant="outline">Pendente</Badge>;
      case "declined":
        return <Badge variant="destructive">Recusou</Badge>;
    }
  };

  const getStatusIcon = (status: Guest["status"]) => {
    switch (status) {
      case "confirmed":
        return <UserCheck className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Users className="h-4 w-4 text-muted-foreground" />;
      case "declined":
        return <UserX className="h-4 w-4 text-destructive" />;
    }
  };

  const confirmedGuests = guests.filter(g => g.status === "confirmed").length;
  const totalGuests = guests.length;

  return (
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-gradient-party">
              <Users className="h-5 w-5 text-white" />
            </div>
            Lista de Convidados
          </div>
          <Badge className="bg-party-blue text-white">
            {confirmedGuests}/{totalGuests}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {guests.map((guest) => (
            <div key={guest.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-muted/50 transition-party">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className={`text-white ${guest.type === 'child' ? 'bg-party-pink' : 'bg-party-purple'}`}>
                    {guest.type === 'child' ? <Baby className="h-4 w-4" /> : guest.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{guest.name}</h4>
                    {guest.age && (
                      <span className="text-xs text-muted-foreground">({guest.age} anos)</span>
                    )}
                  </div>
                  {guest.specialNeeds && (
                    <p className="text-xs text-party-orange font-medium">
                      ⚠️ {guest.specialNeeds}
                    </p>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    {getStatusIcon(guest.status)}
                    <span className="text-xs text-muted-foreground">
                      {guest.type === 'child' ? 'Criança' : 'Adulto'}
                    </span>
                  </div>
                </div>
              </div>
              {getStatusBadge(guest.status)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestList;