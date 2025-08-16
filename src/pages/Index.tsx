import PartyCard from "@/components/PartyCard";
import ServiceCard from "@/components/ServiceCard";
import GuestList from "@/components/GuestList";
import SpecialNeeds from "@/components/SpecialNeeds";
import partyHeroImage from "@/assets/party-hero.jpg";

const Index = () => {
  // Mock data - Em uma aplicação real, estes dados viriam de uma API
  const partyData = {
    title: "Festa da Sofia 🎂",
    date: "15 de Dezembro, 2024",
    time: "14:00 - 18:00",
    location: "Parque Aventura Kids - Sala Fantasia",
    package: "Pacote Premium",
    guests: 25
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
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Party Details */}
        <PartyCard {...partyData} />

        {/* Services and Guests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceCard title="Serviços & Pacotes" services={services} />
          <GuestList guests={guests} />
        </div>

        {/* Special Needs */}
        <SpecialNeeds specialNeeds={specialNeeds} />
      </div>
    </div>
  );
};

export default Index;
