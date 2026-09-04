// ==========================================
// GENERADOR DE DATOS DE PRUEBA - Terapias Bogotá
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

// Generar archivo HTML con datos de prueba
function generateTestDataHTML() {
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cargar Datos de Prueba - Terapias Bogotá</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #15B9D9 0%, #EFA286 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card {
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            border: none;
        }
        .btn-primary {
            background: linear-gradient(135deg, #15B9D9 0%, #EFA286 100%);
            border: none;
            border-radius: 10px;
            padding: 0.75rem 2rem;
            font-weight: 600;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(21, 185, 217, 0.3);
        }
        .status-item {
            padding: 0.5rem;
            margin: 0.25rem 0;
            border-radius: 8px;
            background: #f8f9fa;
        }
        .success { color: #198754; }
        .error { color: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body p-5">
                        <div class="text-center mb-4">
                            <i class="fas fa-database fa-3x text-primary mb-3"></i>
                            <h2 class="card-title">Cargar Datos de Prueba</h2>
                            <p class="text-muted">Sistema Terapias Bogotá</p>
                        </div>
                        
                        <div id="status-area" class="mb-4">
                            <div class="alert alert-info">
                                <i class="fas fa-info-circle me-2"></i>
                                Este script cargará datos de prueba en localStorage para que puedas ver el funcionamiento del sistema de administración.
                            </div>
                        </div>
                        
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-lg" onclick="loadTestData()">
                                <i class="fas fa-upload me-2"></i>Cargar Datos de Prueba
                            </button>
                            <button class="btn btn-outline-secondary" onclick="clearTestData()">
                                <i class="fas fa-trash me-2"></i>Limpiar Datos de Prueba
                            </button>
                            <a href="admin-login.html" class="btn btn-success">
                                <i class="fas fa-user-shield me-2"></i>Ir al Panel de Administración
                            </a>
                        </div>
                        
                        <div id="results-area" class="mt-4" style="display: none;">
                            <h5 class="mb-3"><i class="fas fa-list me-2"></i>Resultados:</h5>
                            <div id="results-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const STORAGE_KEY = 'terapias_bogota_data';
        
        const testCitas = ${JSON.stringify(testCitas, null, 2)};
        const testContactos = ${JSON.stringify(testContactos, null, 2)};
        
        function loadTestData() {
            const statusArea = document.getElementById('status-area');
            const resultsArea = document.getElementById('results-area');
            const resultsContent = document.getElementById('results-content');
            
            try {
                // Obtener datos existentes
                const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
                
                // Preparar datos nuevos
                const newData = {
                    citas: [...(existingData.citas || []), ...testCitas],
                    contactos: [...(existingData.contactos || []), ...testContactos]
                };
                
                // Guardar en localStorage
                localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
                
                // Mostrar resultados
                resultsArea.style.display = 'block';
                resultsContent.innerHTML = \`
                    <div class="status-item success">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>\${testCitas.length} citas</strong> cargadas exitosamente
                    </div>
                    <div class="status-item success">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>\${testContactos.length} contactos</strong> cargados exitosamente
                    </div>
                    <div class="status-item">
                        <i class="fas fa-info-circle me-2"></i>
                        Total en base de datos: <strong>\${newData.citas.length + newData.contactos.length} registros</strong>
                    </div>
                \`;
                
                statusArea.innerHTML = \`
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>¡Datos de prueba cargados exitosamente!</strong>
                        <p class="mb-0 mt-2">Ahora puedes ver estos datos en el panel de administración.</p>
                    </div>
                \`;
                
                console.log('✅ Datos de prueba cargados:', newData);
                
            } catch (error) {
                console.error('Error al cargar datos de prueba:', error);
                statusArea.innerHTML = \`
                    <div class="alert alert-danger">
                        <i class="fas fa-exclamation-circle me-2"></i>
                        <strong>Error al cargar datos:</strong> \${error.message}
                    </div>
                \`;
            }
        }
        
        function clearTestData() {
            if (!confirm('¿Estás seguro de que quieres eliminar todos los datos de prueba?')) return;
            
            try {
                localStorage.removeItem(STORAGE_KEY);
                
                const statusArea = document.getElementById('status-area');
                statusArea.innerHTML = \`
                    <div class="alert alert-warning">
                        <i class="fas fa-trash me-2"></i>
                        <strong>Datos eliminados</strong>
                        <p class="mb-0 mt-2">Todos los datos de prueba han sido eliminados del localStorage.</p>
                    </div>
                \`;
                
                document.getElementById('results-area').style.display = 'none';
                
                console.log('✅ Datos de prueba eliminados');
                
            } catch (error) {
                console.error('Error al eliminar datos:', error);
                alert('Error al eliminar datos: ' + error.message);
            }
        }
        
        // Mostrar información al cargar
        window.addEventListener('load', function() {
            const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            const totalRecords = (existingData.citas?.length || 0) + (existingData.contactos?.length || 0);
            
            if (totalRecords > 0) {
                document.getElementById('status-area').innerHTML = \`
                    <div class="alert alert-warning">
                        <i class="fas fa-database me-2"></i>
                        <strong>Base de datos contiene \${totalRecords} registros</strong>
                        <p class="mb-0 mt-2">Ya hay datos en el sistema. Puedes cargar más datos de prueba o limpiar los existentes.</p>
                    </div>
                \`;
            }
        });
    </script>
</body>
</html>`;

    return htmlContent;
}

// Generar y guardar archivo HTML
const htmlContent = generateTestDataHTML();
const htmlPath = path.join(__dirname, '../test-data.html');
fs.writeFileSync(htmlPath, htmlContent);

console.log('✅ Archivo test-data.html creado exitosamente');
console.log('📁 Ubicación:', htmlPath);
console.log('🌐 Abre test-data.html en tu navegador para cargar los datos de prueba');