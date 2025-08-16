import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle2, AlertCircle, Circle } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "upcoming" | "current";
  type: "milestone" | "payment" | "confirmation" | "preparation";
}

interface EventTimelineProps {
  partyDate: string;
  events: TimelineEvent[];
}

const EventTimeline = ({ partyDate, events }: EventTimelineProps) => {
  const getStatusIcon = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-party-blue" />;
      case 'current':
        return <AlertCircle className="h-5 w-5 text-party-orange" />;
      case 'upcoming':
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-party-blue text-white';
      case 'current':
        return 'bg-party-orange text-white';
      case 'upcoming':
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'milestone':
        return <Calendar className="h-4 w-4" />;
      case 'payment':
        return <Clock className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <Card className="shadow-card hover:shadow-party transition-party">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-party-purple/10">
            <Calendar className="h-6 w-6 text-party-purple" />
          </div>
          Timeline da Festa
        </CardTitle>
        <p className="text-muted-foreground">
          Acompanhe os marcos importantes até o dia da festa
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-4">
                {/* Timeline dot */}
                <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-background ${getStatusColor(event.status)}`}>
                  {getStatusIcon(event.status)}
                </div>
                
                {/* Event content */}
                <div className="flex-1 min-w-0 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(event.type)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {event.date}
                    </Badge>
                    <Badge 
                      variant={event.status === 'completed' ? 'default' : 'secondary'}
                      className={`text-xs ${
                        event.status === 'completed' 
                          ? 'bg-party-blue text-white' 
                          : event.status === 'current'
                          ? 'bg-party-orange text-white'
                          : ''
                      }`}
                    >
                      {event.status === 'completed' ? 'Concluído' : 
                       event.status === 'current' ? 'Em andamento' : 'Próximo'}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Final event - Party day */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-gradient-party text-white">
                🎉
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-lg bg-gradient-party bg-clip-text text-transparent">
                  Dia da Festa!
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  O grande dia chegou! Hora de celebrar
                </p>
                <Badge className="bg-gradient-party text-white border-0">
                  {partyDate}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventTimeline;