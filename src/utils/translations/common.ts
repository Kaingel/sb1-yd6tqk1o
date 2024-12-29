// Common translation types to ensure consistency across all languages
export interface TranslationType {
  nav: {
    services: string;
    fleet: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    corporate: {
      title: string;
      description: string;
    };
    airport: {
      title: string;
      description: string;
    };
    events: {
      title: string;
      description: string;
    };
    tours: {
      title: string;
      description: string;
    };
  };
  fleet: {
    title: string;
    cars: {
      economic: {
        name: string;
        description: string;
      };
      luxury: {
        name: string;
        description: string;
      };
      van: {
        name: string;
        description: string;
      };
      pullman: {
        name: string;
        description: string;
      };
    };
  };
  booking: {
    title: string;
    pointToPoint: string;
    hourly: string;
    name: string;
    email: string;
    phone: string;
    pickup: string;
    destination: string;
    hours: string;
    datetime: string;
    requirements: string;
    submit: string;
    from: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      chauffeurs: string;
      fleet: string;
      availability: string;
      service: string;
    };
  };
}