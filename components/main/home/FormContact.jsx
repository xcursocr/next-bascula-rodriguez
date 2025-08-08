export function FormContact() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap mx-auto px-5 py-24 container">
      <div className="relative flex justify-start items-end bg-foreground/10 sm:mr-10 p-10 rounded-lg md:w-1/2 lg:w-2/3 overflow-hidden">
        <div className="top-0 sm:top-6 right-0 sm:right-6 z-20 absolute flex flex-col bg-background/85 bg-cover bg-center mt-4 p-4 rounded-2xl w-fit text-center">
          <h4 className="text-secondary text-xs sm:text-base">
            Como llegar a nosotros ?
          </h4>
          <a
            href="https://maps.app.goo.gl/1xW9CqJFytZZvvLy8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-foreground hover:text-primary/95 text-xs sm:text-sm transition-colors duration-200"
          >
            Ver en Google Maps
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.172410044733!2d-86.16332902449419!3d12.100346733379713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73f920eed49a0f%3A0x600f8f4ae0fb3db2!2sBasculas%20Rodr%C3%ADguez%20Nicaragua!5e0!3m2!1ses!2scr!4v1754671038704!5m2!1ses!2scr"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: "none" }}
          allowFullScreen=""
          loading="lazy"
          frameBorder="0"
          title="Basculas Rodriguez Nicaragua"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          //   referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="relative flex flex-wrap bg-background shadow-md py-6 rounded">
          <div className="px-6 lg:w-1/2">
            <h2 className="font-semibold text-foreground/75 text-xs tracking-widest title-font">
              Direccion
            </h2>
            <p className="mt-1">
              Ventas de basculas y servicios de pesaje en Nicaragua
            </p>
          </div>
          <div className="mt-4 lg:mt-0 px-6 lg:w-1/2">
            <h2 className="font-semibold text-foreground/75 text-xs tracking-widest title-font">
              Correo
            </h2>
            <a className="text-secborder-secondary leading-relaxed">
              ventas@basculasrodriguez.com
            </a>
            <h2 className="mt-4 font-semibold text-foreground/75 text-xs tracking-widest title-font">
              TELEFONO
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-background mt-8 md:mt-0 md:ml-auto p-4 md:p-8 w-full md:w-1/2 lg:w-1/3">
        <h2 className="mb-1 font-medium text-foreground/75 text-lg title-font">
          Contactanos
        </h2>
        <p className="mb-5 text-foreground/50 leading-relaxed">
          Si tienes alguna pregunta o necesitas más información, no dudes en
        </p>
        <div className="relative mb-4">
          <label
            htmlFor="name"
            className="text-foreground/50 text-sm leading-7"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-background px-3 py-1 border border-foreground/20 focus:border-secondary rounded outline-none focus:ring-2 focus:ring-secondary/75 w-full text-foreground/75 text-base leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="text-foreground/50 text-sm leading-7"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-background px-3 py-1 border border-foreground/20 focus:border-secondary rounded outline-none focus:ring-2 focus:ring-secondary/75 w-full text-foreground/75 text-base leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="text-foreground/50 text-sm leading-7"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-background px-3 py-1 border border-foreground/20 focus:border-secondary rounded outline-none focus:ring-2 focus:ring-secondary/75 w-full h-32 text-foreground/75 text-base leading-6 transition-colors duration-200 ease-in-out resize-none"
          ></textarea>
        </div>
        <button className="bg-secondary hover:bg-secondary/85 px-6 py-2 border-0 rounded focus:outline-none text-background text-lg">
          Enviar
        </button>
        <p className="mt-3 text-foreground/80 text-xs">
          Muchas gracias por escribirnos, en breve nos pondremos en contacto
          contigo.
        </p>
      </div>
    </div>
  );
}
