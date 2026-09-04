// ==========================================
// CARGADOR DE DATOS DE PRUEBA - Terapias Bogotá
// ==========================================

const fs = require('fs');
const path = require('path');

// Datos de prueba para citas
const testCitas = [
    {
        id: 'cita-001',
        type: 'cita',
        nombre: 'María García López',
        correo: 'maria.garcia@email.com',
        telefono: '3101234567',
        genero: 'Femenino',
        fecha: '2024-09-10',
        especialidad: 'Fisioterapia',
        comentarios: 'Necesito tratamiento para dolor lumbar crónico. Prefiero horario de la mañana.',
        timestamp: '2024-09-03T08:30:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ip: '190.24.145.67'
    },
    {
        id: 'cita-002',
        type: 'cita',
        nombre: 'Carlos Rodríguez Martínez',
        correo: 'carlos.rodriguez@email.com',
        telefono: '3209876543',
        genero: 'Masculino',
        fecha: '2024-09-12',
        especialidad: 'Terapia Ocupacional',
        comentarios: 'Recuperación de lesión en hombro derecho. Necesito evaluación completa.',
        timestamp: '2024-09-03T10:15:00.000Z',
        status: 'completado',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        ip: '181.143.89.12'
    },
    {
        id: 'cita-003',
        type: 'cita',
        nombre: 'Ana María Fernández',
        correo: 'ana.fernandez@email.com',
        telefono: '3155551234',
        genero: 'Femenino',
        fecha: '2024-09-15',
        especialidad: 'Fonoaudiología',
        comentarios: 'Evaluación de lenguaje para mi hijo de 5 años. Preferencia tarde.',
        timestamp: '2024-09-03T14:20:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15',
        ip: '200.71.234.56'
    },
    {
        id: 'cita-004',
        type: 'cita',
        nombre: 'Jorge Enrique Pérez',
        correo: 'jorge.perez@email.com',
        telefono: '3007778888',
        genero: 'Masculino',
        fecha: '2024-09-18',
        especialidad: 'Psicología',
        comentarios: 'Consulta por ansiedad y estrés laboral. Necesito orientación profesional.',
        timestamp: '2024-09-03T16:45:00.000Z',
        status: 'cancelado',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ip: '186.145.67.89'
    },
    {
        id: 'cita-005',
        type: 'cita',
        nombre: 'Laura Sofía Ramírez',
        correo: 'laura.ramirez@email.com',
        telefono: '3112223333',
        genero: 'Femenino',
        fecha: '2024-09-20',
        especialidad: 'Nutrición',
        comentarios: 'Plan nutricional para pérdida de peso. Tengo condiciones específicas.',
        timestamp: '2024-09-03T18:30:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0',
        ip: '179.52.123.45'
    }
];

// Datos de prueba para contactos
const testContactos = [
    {
        id: 'contacto-001',
        type: 'contacto',
        nombre: 'Pedro Antonio Gómez',
        correo: 'pedro.gomez@email.com',
        telefono: '3184445555',
        asunto: 'Información general',
        mensaje: 'Hola, me gustaría conocer más información sobre los servicios de fisioterapia que ofrecen. ¿Cuáles son los horarios de atención y cuáles son los costos aproximados?',
        timestamp: '2024-09-03T09:00:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ip: '190.24.145.67'
    },
    {
        id: 'contacto-002',
        type: 'contacto',
        nombre: 'Carmen Elena Torres',
        correo: 'carmen.torres@email.com',
        telefono: '3176667777',
        asunto: 'Cita urgente',
        mensaje: 'Necesito una cita de emergencia para hoy mismo si es posible. Tengo un dolor muy fuerte en la espalda y no puedo moverme. Por favor contáctenme lo antes posible.',
        timestamp: '2024-09-03T11:30:00.000Z',
        status: 'completado',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        ip: '181.143.89.12'
    },
    {
        id: 'contacto-003',
        type: 'contacto',
        nombre: 'Roberto Carlos Silva',
        correo: 'roberto.silva@email.com',
        telefono: '3198889999',
        asunto: 'Servicios corporativos',
        mensaje: 'Represento a una empresa y estamos interesados en contratar servicios de terapia ocupacional para nuestros empleados. ¿Ofrecen planes corporativos o descuentos por volumen?',
        timestamp: '2024-09-03T13:15:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15',
        ip: '200.71.234.56'
    },
    {
        id: 'contacto-004',
        type: 'contacto',
        nombre: 'Diana Marcela Vargas',
        correo: 'diana.vargas@email.com',
        telefono: '3130001111',
        asunto: 'Recomendación',
        mensaje: 'Quiero dejar una recomendación muy positiva. El tratamiento que recibí fue excelente y el personal muy profesional. Gracias por su excelente servicio.',
        timestamp: '2024-09-03T15:00:00.000Z',
        status: 'completado',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ip: '186.145.67.89'
    },
    {
        id: 'contacto-005',
        type: 'contacto',
        nombre: 'Andrés Felipe Muñoz',
        correo: 'andres.munoz@email.com',
        telefono: '3122223333',
        asunto: 'Horarios de atención',
        mensaje: '¿Cuáles son los horarios de atención durante la semana? ¿Atienden los fines de semana? Necesito programar una cita fuera del horario laboral normal.',
        timestamp: '2024-09-03T17:45:00.000Z',
        status: 'pendiente',
        userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-A505FN) AppleWebKit/537.36',
        ip: '179.52.123.45'
    }
];

// Crear archivo JSON con los datos de prueba
const testData = {
    citas: testCitas,
    contactos: testContactos
};

// Guardar archivo JSON
const jsonPath = path.join(__dirname, '../test-data.json');
fs.writeFileSync(jsonPath, JSON.stringify(testData, null, 2));

console.log('✅ Archivo test-data.json creado exitosamente');
console.log('📁 Ubicación:', jsonPath);
console.log('📊 Datos incluidos:');
console.log(`   - ${testCitas.length} citas de prueba`);
console.log(`   - ${testContactos.length} contactos de prueba`);
console.log(`   - Total: ${testCitas.length + testContactos.length} registros`);
console.log('');
console.log('🌐 Para cargar los datos en el sistema:');
console.log('   1. Abre test-data.html en tu navegador');
console.log('   2. Haz clic en "Cargar Datos de Prueba"');
console.log('   3. Ve a admin-login.html para ver los datos en el panel de administración');
console.log('');
console.log('🔐 Credenciales de administrador:');
console.log('   Usuario: admin');
console.log('   Contraseña: terapias2024');