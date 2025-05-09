import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import es from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: es,
    eventContent: function (arg) {
      return {
        html: `<div style="white-space: normal; overflow-wrap: break-word;">${arg.event.title}</div>`,
      };
    },
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      {
        title: 'Habito "Leer 30 minutos" cumplido',
        date: '2025-05-01',
        color: '#1F3738',
      },
      { title: 'Hábito "Ejercicio" cumplido', date: '2025-05-01' },
      {
        title: 'Habito "Leer 30 minutos" cumplido',
        date: '2025-04-30',
        color: '#1F3738',
      },
      { title: 'Hábito "Ejercicio" cumplido', date: '2025-05-02' },
      {
        title: 'Tárea "Sacar al perro" cumplida',
        date: '2025-05-03',
        color: '#ec7c26',
      },
      {
        title: 'Hábito "Meditar" cumplido',
        date: '2025-05-05',
        color: '#35682d',
      },
      {
        title: 'Hábito "Beber 2 litros de agua" cumplido',
        date: '2025-05-06',
        color: '#572364',
      },
      {
        title: 'Fecha de entrega "Preparar parcial"',
        date: '2025-05-08',
        color: '#a18594',
      },
      {
        title: 'Fecha de entrega "Comprar víveres"',
        date: '2025-05-08',
        color: '#a18594',
      },
      {
        title: 'Fecha de entrega "Llamar a mamá"',
        date: '2025-05-09',
        color: '#a18594',
      },
      {
        title: 'Fecha de entrega "Enviar informe de progreso"',
        date: '2025-05-14',
        color: '#a18594',
      },
    ],
    weekends: true,
  };

  handleDateClick(arg: DateClickArg) {
    alert('Fecha seleccionada! ' + arg.dateStr);
  }
}
