export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
};

const siteConfig: SiteConfig = {
    title: 'Distribuidor Exclusivo de Nanoplastia UNIKA en Costa Rica',
    subtitle: 'Transforma el Cuidado Capilar con UNIKA tendrás Innovación y Calidad Garantizada por Agilise Cosméticos',
    description: 'Somos el distribuidor exclusivo de Nanoplastia UNIKA en Costa Rica, ofreciendo productos capilares de alta calidad respaldados por Agilise Cosméticos. Nuestro compromiso es proporcionar soluciones seguras y efectivas para salones de belleza, con opciones de financiamiento flexibles y una rentabilidad superior. Descubre productos certificados, con resultados de larga duración, que garantizan un alisado perfecto y un cuidado capilar profesional. Mejora la experiencia de tus clientes con Nanoplastia UNIKA y haz crecer tu negocio con un socio confiable.',
    image: {
        src: '/images/UNIKA.jpg',
        alt: 'Distribuidor exclusivo de Nanoplastia UNIKA en Costa Rica'
    },
  
};

export default siteConfig;
