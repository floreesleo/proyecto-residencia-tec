import DateTimePicker from "react-datetime-picker";
import { useState } from "react";

export default function Eventos() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  return (
    <>
      <h2>Crear evento</h2>
      <p>Inicio del evento.</p>
      <DateTimePicker onChange={setStart} value={start} />
      <p>Fin del evento.</p>
      <DateTimePicker onChange={setEnd} value={end} />
      <p>Nombre del evento</p>
      <input type="text" onChange={(e) => setEventName(e.target.value)} />
      <p>Descripción del evento</p>
      <input
        type="text"
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <button>Crear evento en calendario</button>
    </>
  );
}
