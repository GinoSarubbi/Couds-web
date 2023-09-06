import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './acordion.css';

const faqData = [
  {
    question: '¿Qué es Cloud?',
    answer: 'Cloud es un servicio de almacenamiento en la nube que te permite guardar tus archivos de forma segura en línea. Similar a Google Drive, puedes cargar, descargar y acceder a tus documentos desde cualquier lugar y dispositivo.',
  },
  {
    question: '¿Cómo puedo registrarme en Cloud?',
    answer: 'Registrarse en Cloud es fácil. Visita nuestro sitio web, haz clic en el botón de registro e ingresa tus datos personales. Una vez registrado, podrás empezar a usar nuestros servicios de almacenamiento en la nube de inmediato.',
  },
  {
    question: '¿Cómo puedo subir archivos a mi cuenta en Cloud?',
    answer: 'Para subir archivos a tu cuenta de Cloud, inicia sesión en tu cuenta, luego selecciona la opción "Subir archivos" o "Cargar" y elige los archivos que deseas cargar desde tu dispositivo. Puedes organizar tus archivos en carpetas una vez que estén en la nube.',
  },
  {
    question: '¿Puedo compartir archivos con otras personas en Cloud?',
    answer: 'Sí, Cloud te permite compartir archivos y carpetas con otras personas. Puedes generar enlaces compartidos o invitar a otros usuarios a colaborar en archivos específicos. También puedes establecer permisos para controlar quién puede ver y editar tus archivos compartidos.',
  },
  {
    question: '¿Cuál es la capacidad de almacenamiento en mi cuenta de Cloud?',
    answer: 'La capacidad de almacenamiento en tu cuenta de Cloud depende del plan que elijas. Ofrecemos diferentes planes con diferentes niveles de almacenamiento. Puedes verificar la capacidad de almacenamiento en tu cuenta y actualizar tu plan si es necesario desde la configuración de la cuenta.',
  },
];

export default function BasicAccordion() {
  return (
    <div className='contenedor-acordion'>
      {faqData.map((faq, index) => (
        <Accordion key={index} className='acordion'>
          <AccordionSummary className='summary'
            expandIcon={<ExpandMoreIcon className='flecha' />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography className='p'>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
