
const { createBot, createProvider, createFlow, addKeyword} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowString = addKeyword('boton').addAnswer('Este mensaje envia tres botones', {
    buttons: [{ body: 'Boton 1' }, { body: 'Boton 2' }, { body: 'Boton 3' }],
})

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

const flowDireccion = addKeyword(['ubicacion', 'direccion', 'ubica', 'ubican', 'donde se encuentran'])
    .addAnswer('¡Hola!😊\n'+
    'Bienvenid@ a ICOMPUTEC.COM👨🏻‍💻\n'+
    '¡Muchas gracias por preferirnos!\n '+
    'Esperamos poder servirte pronto.\n'+
    
        '🟡 VENTA DE LAPTOS 🟡\n'+
    'ACCESORIOS y COMPUTADORAS\n'+
    '___________\n'+
      '⛔ SEDE PRINCIPAL ⛔\n'+
    'https://maps.app.goo.gl/3FXcYqY3VME2FfKf6\n'+      
    
     'Octavio Muñoz Najar 221\n'+
       'Galerias NOVA CENTER\n'+
     '✅ Segundo Piso:  Tienda 214 - PRINCIPAL\n'+
    
     '✅ Tercer Piso:  Tienda 308\n'+
    '___________\n'+
    '🆘 SERVICIO TÉCNICO ESPECIALIZADO🆘\n'+
             
    '📲 930 276 300 - Segundo Piso\n '+
    '📲 958 992 009 - Tercer Piso\n '+
    '___________\n'+
    'FACEBOOK\n'+
    'https://www.facebook.com/icomputec/\n'+
    '__________\n'+
    '⚠️ HORÁRIO DE ATENCIÓN ⚠️\n'+
    'Lunes a Viernes:\n 🕙 9:30 am - 1:30 pm 🕕\n'+
    '🕙 2:00 pm - 7:00 pm 🕕\n'+
    'Sábados: 🕙 10:00 am - 1:30 pm 🕑\n'+
    '🕙 2:00 pm - 6:00 pm 🕕\n'+
    '__________\n'+
    'CONTACTE POR WHATSAPP\n'+
     '📱https://wa.me/51930276300\n'+
     '📱https://wa.me/51958992009\n'+
    '___________\n'+
    '🟡 NUESTROS ESPECIALISTAS 🟡\n'+
          '👨🏻‍💻 Wilian Llano - Gerente\n'+
          '👨🏻‍💻 David Acero\n'+
          '👨🏻‍💻 Percy Aguilar\n'+
          '👩‍💻 Amy Garcia\n'+
          '👩‍💻 Karen Rivera\n'+
    
     '___________\n'+
                'Desde 2006 - 2023\n'+
              'https://icomputec.com\n'+
     '___________\n'+
    
    'Saludos cordiales!')
const flowPrincipal = addKeyword(['hola', 'consulta', 'buenas'])
    .addAnswer(['🙌 Hola, bienvenido a IComputec 😊', '¿Cómo podemos ayudarte?',
                'Puedes consultar por nuestros servicios:',
                '1. Reparación de Laptops y PC',
                '2. Mantenimiento Físico',
                '3. Formateo e Instalación de programas',
                '4. Recuperación de datos',
                '5. Repotenciación',
                '6. Otro'],
                null,
                null,
                [flowPago,flowCuentas,flowHorario,flowDireccion,flowString]
                )
    .addAnswer(['Escriba la opción del servicio que desea'], {capture:true}, async (ctx,{flowDynamic,endFlow}) => {
        console.log('Mensaje entrante: ', ctx.body);
        switch (ctx.body) {
            case '1':
                return flowDynamic({body:'😊 Si,puede traer su equipo a nuestra tienda para hacele un diagnostico e indicarle la mejor solución\n 🙌 Lo esperamos en nuestra tienda: ✅ Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌'
                })
            case '2':
                return flowDynamic({body:'😊 Si, desde 60 soles para laptop dependiendo del modelo de su equipo y desde 50 soles para CPU.💻\n Utilizamos pasta térmica de marca thermaltake, corsarir, cooler master.\n El mantenimiento consiste en limpieza interna y externa del equipo, limpieza del sistema de enfriamiento, limpieza del ventilador, cambio de pasta al procesador y tarjeta de video.\n'
                })
            case '3':
                return flowDynamic({body:'Si, podemos ayudarte😊\n 🙌 Puede traer su equipo a nuestra tienda: ✅Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌'
                })
            case '4':
                return flowDynamic({body:'El servicio de recuperación:\n ✅Se realiza un diagnostico el cual tiene un costo de S/20.00 donde se verifica si es posible o no recuperar la información, en el caso  de que se pudiera recuperar la información, tendria un costo desde los S/100.00 dependiendo a la cantidad de datos.\n 🙌 Puede traer su equipo a nuestra tienda: ✅ Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌'
                })
            case '5':
                return flowDynamic({body:'Si, te podemos ayudar😊. Nosotros repotenciamos y te podemos asesorar con lo mejor para su equipo 💻\n para mayor información te recomendamos acercarte a nuestra tienda: ✅ Octavio Muñoz Najar 221 Segundo Piso:  Tienda 214 - Galerias NOVA CENTER 📌'
                })
            default:
                return flowDynamic({body:'Podria indicarnos su consulta.\n'+ 'En breve nuestro personal le atenderá'
                })
        }
    })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowPago,flowCuentas,flowHorario,flowDireccion,flowString])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}
main()