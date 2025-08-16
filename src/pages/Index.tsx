import PartyCard from "@/components/PartyCard";
import ServiceCard from "@/components/ServiceCard";
import GuestList from "@/components/GuestList";
import SpecialNeeds from "@/components/SpecialNeeds";
import EventTimeline from "@/components/EventTimeline";
import PaymentSummary from "@/components/PaymentSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import partyHeroImage from "@/assets/party-hero.jpg";

const Index = () => {
  // Mock data - Em uma aplicação real, estes dados viriam de uma API
  const partyData = {
    title: "Festa da Sofia 🎂",
    date: "15 de Dezembro, 2024",
    time: "14:00 - 18:00",
    location: "Parque Aventura Kids - Sala Fantasia",
    package: "Pacote Premium",
    guests: 25,
    tickets: 15,
    ticketType: "3 Horas"
  };

  const services = [
    {
      id: "1",
      name: "Decoração Temática Unicórnio",
      description: "Decoração completa com balões, mesa temática e cenário",
      status: "included" as const,
      category: "Decoração"
    },
    {
      id: "2",
      name: "Animação com Personagem",
      description: "2 horas de animação com personagem da Elsa",
      status: "included" as const,
      category: "Entretenimento"
    },
    {
      id: "3",
      name: "Buffet Infantil",
      description: "Salgadinhos, docinhos, refrigerante e bolo",
      status: "included" as const,
      category: "Alimentação"
    },
    {
      id: "4",
      name: "Fotógrafo Profissional",
      description: "Cobertura fotográfica completa do evento",
      status: "extra" as const,
      price: 350,
      category: "Extras"
    },
    {
      id: "5",
      name: "Kit Lembrancinha Premium",
      description: "Sacola personalizada com doces e brinquedos",
      status: "pending" as const,
      price: 180,
      category: "Lembrancinhas"
    }
  ];

  const guests = [
    {
      id: "1",
      name: "Sofia",
      age: 7,
      status: "confirmed" as const,
      type: "child" as const
    },
    {
      id: "2",
      name: "Ana Paula (Mãe)",
      status: "confirmed" as const,
      type: "adult" as const
    },
    {
      id: "3",
      name: "Roberto (Pai)",
      status: "confirmed" as const,
      type: "adult" as const
    },
    {
      id: "4",
      name: "Maria",
      age: 8,
      status: "confirmed" as const,
      type: "child" as const,
      specialNeeds: "Alergia a amendoim"
    },
    {
      id: "5",
      name: "João",
      age: 6,
      status: "pending" as const,
      type: "child" as const
    },
    {
      id: "6",
      name: "Carla (Mãe da Maria)",
      status: "confirmed" as const,
      type: "adult" as const
    }
  ];

  const specialNeeds = [
    {
      id: "1",
      type: "allergy" as const,
      description: "Alergia severa a amendoim e nozes",
      severity: "high" as const,
      guestName: "Maria"
    },
    {
      id: "2",
      type: "dietary" as const,
      description: "Vegetariana - não consome carne",
      severity: "medium" as const,
      guestName: "Carla"
    }
  ];

  const timelineEvents = [
    {
      id: "1",
      title: "Contrato Assinado",
      description: "Contrato da festa foi assinado e confirmado",
      date: "20 de Nov, 2024",
      status: "completed" as const,
      type: "milestone" as const
    },
    {
      id: "2", 
      title: "Primeira Parcela",
      description: "Pagamento da entrada (50% do valor total)",
      date: "25 de Nov, 2024",
      status: "completed" as const,
      type: "payment" as const
    },
    {
      id: "3",
      title: "Confirmação do Cardápio",
      description: "Definição final do buffet e necessidades especiais",
      date: "1 de Dez, 2024",
      status: "current" as const,
      type: "confirmation" as const
    },
    {
      id: "4",
      title: "Segunda Parcela",
      description: "Pagamento da segunda parcela (30% do valor total)",
      date: "5 de Dez, 2024",
      status: "upcoming" as const,
      type: "payment" as const
    },
    {
      id: "5",
      title: "Confirmação Final de Convidados",
      description: "Lista final de convidados confirmados",
      date: "10 de Dez, 2024",
      status: "upcoming" as const,
      type: "confirmation" as const
    },
    {
      id: "6",
      title: "Pagamento Final",
      description: "Quitação do valor restante (20% + extras)",
      date: "13 de Dez, 2024",
      status: "upcoming" as const,
      type: "payment" as const
    },
    {
      id: "7",
      title: "Preparação Final",
      description: "Montagem da decoração e preparativos finais",
      date: "14 de Dez, 2024",
      status: "upcoming" as const,
      type: "preparation" as const
    }
  ];

  const paymentData = {
    totalAmount: 2500,
    payments: [
      {
        id: "1",
        description: "Entrada (50%)",
        amount: 1250,
        dueDate: "25 de Nov, 2024",
        paidDate: "24 de Nov, 2024",
        status: "paid" as const,
        method: "pix" as const
      },
      {
        id: "2",
        description: "Segunda Parcela (30%)",
        amount: 750,
        dueDate: "5 de Dez, 2024",
        status: "pending" as const
      },
      {
        id: "3",
        description: "Pagamento Final (20%)",
        amount: 500,
        dueDate: "13 de Dez, 2024",
        status: "pending" as const
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${partyHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-party opacity-90" />
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎉 PartyPlay Tracker
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Acompanhe todos os detalhes da sua festa especial
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="resumo" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="resumo">Resumo do Pacote</TabsTrigger>
            <TabsTrigger value="timeline">Linha do Tempo</TabsTrigger>
            <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
            <TabsTrigger value="detalhes">Detalhes do Pacote</TabsTrigger>
            <TabsTrigger value="convidados">Lista de Convidados</TabsTrigger>
            <TabsTrigger value="solicitacoes">Solicitações</TabsTrigger>
          </TabsList>

          <TabsContent value="resumo" className="space-y-8">
            <PartyCard {...partyData} />
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <EventTimeline 
              partyDate={partyData.date}
              events={timelineEvents}
            />
          </TabsContent>

          <TabsContent value="pagamentos" className="space-y-8">
            <PaymentSummary 
              totalAmount={paymentData.totalAmount}
              payments={paymentData.payments}
            />
          </TabsContent>

          <TabsContent value="detalhes" className="space-y-8">
            <ServiceCard title="Serviços & Pacotes" services={services} />
          </TabsContent>

          <TabsContent value="convidados" className="space-y-8">
            <GuestList guests={guests} />
          </TabsContent>

          <TabsContent value="solicitacoes" className="space-y-8">
            <SpecialNeeds specialNeeds={specialNeeds} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
