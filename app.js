const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

/* const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario']) */

/* const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
) */

/* const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
) */

/* const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
) */

/* const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
) */

const flowPrincipal = addKeyword(['hola', 'consulta', 'buenas'])
    .addAnswer(['🙌 Hola, bienvenido a IComputec', '¿Cómo podemos ayudarte?'])
    .addAnswer(
        [
            'Reparamos laptops y computadoras de todas las marcas, todos los modelos. Vendemos accesorios para laptops y pc, recuperación de datos.',
            'Servicios en Nuestras Tiendas:',
            '1. Reparación de Laptops y PC',
            '2. Mantenimiento Físico',
            '3. Formateo e Instalación de programas',
            '4. Recuperación de datos',
            '5. Repotenciación',
            '6. Otro',
            'Te comparto los siguientes links de contacto para mayor información:',
            '👉 *Facebook* https://www.facebook.com/icomputec',
            '👉 *Tiktok*  https://www.tiktok.com/@icomputec',
            '👉 *Instagram* https://www.instagram.com/icomputec/',
            '👉 *Pagina Web* https://icomputec.com/',

        ]
        .addAnswer('Escriba la opción del servicio que desea', {capture:true},(ctx) => {

            console.log('Mensaje entrante: ', ctx.body);
            switch (ctx.body) {
                case '1':
                  console.log(['Puede traer su equipo a nuestra tienda para hacele un diagnostico y indicarle la mejor solución,'+
                  'lo esperamos en nuestra tienda: Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌']);
                  break;
                case '2':
                  console.log(['Desde 60 soles para laptop dependiendo del modelo de su equipo y desde 50 soles para CPU. Utilizamos pasta térmica de marca thermaltake, corsarir, '+
                  'cooler master. El mantenimiento consiste en limpieza interna y externa del equipo, limpieza '+
                  'del sistema de enfriamiento, limpieza del ventilador, cambio de pasta al procesador y tarjeta de video',
                  'Puede traer su equipo a nuestra tienda: Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌']);
                  break;
                
                case '3':
                    console.log(['Si, podemos ayudarte', 'Puede traer su equipo a nuestra tienda: Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌']);
                    break;
                case '4':
                    console.log(['El servicio de recuperación:'+
                    '-Se realiza un diagnostico el cual tiene un costo de S/20.00 en el cual se verifica si es posible o no recuperar la información,' +
                    ' en el caso  de que se pudiera recuperar la información, tendria un costo desde los S/100.00 dependiendo a la cantidad de datos.',
                    'Puede traer su equipo a nuestra tienda: Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌']);
                    break;
                case '5':
                    console.log('Si, te podemos ayudar. Nosotros repotenciamos y te podemos asesorar con lo mejor para su equipo', 'para mayor información' +
                    'te recomendamos acercarte a nuestra tienda: Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌')
                    break;
                default:
                  console.log('Podria indicarnos su consulta.', 'En breve nuestro personal le atenderá');
              }
        }),
        
        null,
        null,
    )
    
const flowPago = addKeyword(['tarjeta', 'efectivo', 'pago', 'pagos', 'transferencia'])
.addAnswer('Aceptamos pagos en efectivo, todas las tarjetas con un 5% de recargo al total del servicio, billeteras digitales como Yape y Plin o transferencias bancarias')
const flowCuentas = addKeyword(['cuentas', 'cuenta', 'cuenta de ahorro'])
.addAnswer(['🟣 YAPE: 930276300 🟣\n','🟣 PLIN: 930276300 🟣\n'+
'✅WILIAN LLANO\n'+
'===========================\n'+
'NÚMEROS DE CUENTA:\n'+
'CUENTA - BCP SOLES:\n '+	
'✅WILIAN LLANO\n	'	+

'21526721802015\n	'	+	
'===========================\n'+
'CUENTA - INTERBANK SOLES:\n '+
'✅WILIAN LLANO\n'+

'3003050039857\n	'+
'===========================\n'+
'CUENTA - BBVA SOLES:\n '+
'✅WILIAN LLANO\n'			+

'0011-0764-0200096600\n'+
'===========================\n'+
'CUENTA - SCOTIABANK SOLES:\n' +
'✅WILIAN LLANO\n	'		+

'7008344058\n'+
'==========================='])
const flowHorario = addKeyword(['horario', 'atencion','atienden','hora', 'atendiendo', 'hora de atencion'])
.addAnswer('HORARIO DE ATENCIÓN\n'+
'Lunes a Viernes: 🕙 9:30 am - 1:30 pm 🕕\n'+
'🕙 2:00 pm - 7:00 pm 🕕\n'+
'Sábados: 🕙 10:00 am - 1:30 pm 🕑\n'+
 '🕙 2:00 pm - 6:00 pm 🕕\n'+
'Domingo: Cerrado')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}
main()