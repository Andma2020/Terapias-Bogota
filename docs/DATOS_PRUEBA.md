# 🧪 Sistema de Datos de Prueba - Terapias Bogotá

## 🎯 Objetivo

Este sistema permite cargar datos de prueba en la base de datos para verificar que el sistema de administración funcione correctamente y que los datos sean visibles en el panel de administración.

## 📋 Datos de Prueba Incluidos

### 👥 **5 Citas de Prueba**

1. **María García López** - Fisioterapia (pendiente)
   - Email: maria.garcia@email.com
   - Teléfono: 3101234567
   - Fecha: 2024-09-10
   - Comentarios: Tratamiento para dolor lumbar crónico

2. **Carlos Rodríguez Martínez** - Terapia Ocupacional (completado)
   - Email: carlos.rodriguez@email.com
   - Teléfono: 3209876543
   - Fecha: 2024-09-12
   - Comentarios: Recuperación de lesión en hombro derecho

3. **Ana María Fernández** - Fonoaudiología (pendiente)
   - Email: ana.fernandez@email.com
   - Teléfono: 3155551234
   - Fecha: 2024-09-15
   - Comentarios: Evaluación de lenguaje para hijo de 5 años

4. **Jorge Enrique Pérez** - Psicología (cancelado)
   - Email: jorge.perez@email.com
   - Teléfono: 3007778888
   - Fecha: 2024-09-18
   - Comentarios: Consulta por ansiedad y estrés laboral

5. **Laura Sofía Ramírez** - Nutrición (pendiente)
   - Email: laura.ramirez@email.com
   - Teléfono: 3112223333
   - Fecha: 2024-09-20
   - Comentarios: Plan nutricional para pérdida de peso

### 📧 **5 Contactos de Prueba**

1. **Pedro Antonio Gómez** - Información general (pendiente)
   - Email: pedro.gomez@email.com
   - Teléfono: 3184445555
   - Asunto: Información sobre servicios de fisioterapia

2. **Carmen Elena Torres** - Cita urgente (completado)
   - Email: carmen.torres@email.com
   - Teléfono: 3176667777
   - Asunto: Cita de emergencia por dolor fuerte

3. **Roberto Carlos Silva** - Servicios corporativos (pendiente)
   - Email: roberto.silva@email.com
   - Teléfono: 3198889999
   - Asunto: Contratación de servicios para empresa

4. **Diana Marcela Vargas** - Recomendación (completado)
   - Email: diana.vargas@email.com
   - Teléfono: 3130001111
   - Asunto: Recomendación positiva del servicio

5. **Andrés Felipe Muñoz** - Horarios de atención (pendiente)
   - Email: andres.munoz@email.com
   - Teléfono: 3122223333
   - Asunto: Consulta sobre horarios de atención

## 🚀 Cómo Usar el Sistema

### **Opción 1: Carga Automática (Recomendada)**

1. **Abre el archivo de carga automática:**
   ```
   file:///C:/Users/anderson.mantilla/TestPage-main/TestPage/auto-load-data.html
   ```
   O en GitHub Pages:
   ```
   https://andma2020.github.io/Terapias-Bogota/auto-load-data.html
   ```

2. **Espera la carga automática:**
   - Los datos se cargarán automáticamente después de 1 segundo
   - Verás una animación de carga
   - Aparecerá un mensaje de éxito con estadísticas

3. **Ve al panel de administración:**
   - Haz clic en "Ir al Panel de Administración"
   - O accede directamente: `admin-login.html`

### **Opción 2: Carga Manual**

1. **Abre el archivo de carga manual:**
   ```
   file:///C:/Users/anderson.mantilla/TestPage-main/TestPage/test-data.html
   ```

2. **Haz clic en "Cargar Datos de Prueba":**
   - Los datos se cargarán en localStorage
   - Verás un resumen de los datos cargados

3. **Ve al panel de administración:**
   - Haz clic en "Ir al Panel de Administración"

## 🔐 Acceso al Panel de Administración

### **Credenciales de Administrador:**
- **Usuario:** `admin`
- **Contraseña:** `terapias2024`

### **URL del Panel:**
- **Local:** `file:///C:/Users/anderson.mantilla/TestPage-main/TestPage/admin-login.html`
- **GitHub Pages:** `https://andma2020.github.io/Terapias-Bogota/admin-login.html`

## 📊 Qué Verás en el Panel de Administración

### **Estadísticas:**
- **Total Citas:** 5
- **Total Contactos:** 5
- **Pendientes:** 6
- **Fuente de Datos:** Local

### **Tabla de Datos:**
- 10 registros totales (5 citas + 5 contactos)
- Cada registro con información completa
- Estados: pendiente, completado, cancelado
- Acciones disponibles: ver, completar, eliminar

### **Funcionalidades Disponibles:**
- ✅ Filtrar por tipo (citas/contactos)
- ✅ Buscar por nombre, email, teléfono
- ✅ Ver detalles completos de cada registro
- ✅ Actualizar estados (pendiente → completado)
- ✅ Eliminar registros
- ✅ Exportar a CSV
- ✅ Actualizar datos en tiempo real

## 🧪 Verificación del Sistema

### **Paso 1: Cargar Datos de Prueba**
1. Abre `auto-load-data.html`
2. Espera la carga automática
3. Verifica que aparezca el mensaje de éxito

### **Paso 2: Acceder al Panel Admin**
1. Haz clic en "Ir al Panel de Administración"
2. Ingresa las credenciales: `admin` / `terapias2024`
3. Verifica que puedas acceder

### **Paso 3: Verificar Datos**
1. Revisa las estadísticas (deben mostrar 5 citas y 5 contactos)
2. Revisa la tabla de datos (debe mostrar 10 registros)
3. Haz clic en "Ver detalles" de algún registro
4. Verifica que la información sea correcta

### **Paso 4: Probar Funcionalidades**
1. **Filtrar:** Selecciona "Citas" en el filtro
2. **Buscar:** Escribe "María" en el buscador
3. **Actualizar estado:** Marca una cita como "completado"
4. **Exportar:** Descarga el CSV de citas
5. **Eliminar:** Elimina un registro de prueba

## 🔄 Limpiar Datos de Prueba

### **Desde la página de carga:**
1. Abre `auto-load-data.html` o `test-data.html`
2. Haz clic en "Limpiar Datos de Prueba"
3. Confirma la eliminación

### **Desde el panel admin:**
1. Accede al panel de administración
2. Usa el botón de eliminar en cada registro
3. O elimina todos los registros manualmente

## 📁 Archivos del Sistema

### **Archivos Principales:**
- `auto-load-data.html` - Carga automática de datos
- `test-data.html` - Carga manual de datos
- `test-data.json` - Datos de prueba en formato JSON

### **Scripts de Generación:**
- `scripts/generate-test-data.js` - Genera archivos de prueba
- `scripts/load-test-data.js` - Carga datos en JSON

### **Documentación:**
- `docs/DATOS_PRUEBA.md` - Este documento
- `docs/SISTEMA_DB.md` - Documentación del sistema de base de datos

## 🌐 Despliegue en GitHub Pages

### **Los datos de prueba funcionan en:**
- ✅ **Local:** `file:///.../auto-load-data.html`
- ✅ **GitHub Pages:** `https://andma2020.github.io/Terapias-Bogota/auto-load-data.html`
- ✅ **Cualquier navegador:** Chrome, Firefox, Safari, Edge

### **Limitaciones del modo local:**
- ⚠️ Los datos solo se ven en el mismo navegador
- ⚠️ No se comparten entre dispositivos
- ⚠️ Se pierden si se borra el caché del navegador

### **Solución: Configurar Firebase**
- 📖 Ver `docs/SISTEMA_DB.md` para instrucciones
- 🚀 Los datos serán accesibles desde cualquier navegador
- 🔄 Sincronización en tiempo real

## 🎯 Próximos Pasos

### **Para probar el sistema:**
1. ✅ Cargar datos de prueba
2. ✅ Verificar en panel admin
3. ✅ Probar todas las funcionalidades
4. ✅ Limpiar datos de prueba

### **Para producción:**
1. ⏳ Configurar Firebase
2. ⏳ Cambiar credenciales de admin
3. ⏳ Implementar autenticación real
4. ⏳ Configurar reglas de seguridad

## 📞 Soporte

### **Si los datos no aparecen:**
1. Verifica que hayas cargado los datos correctamente
2. Abre la consola del navegador (F12) para ver errores
3. Limpia el caché y vuelve a cargar
4. Verifica que localStorage esté habilitado

### **Si no puedes acceder al panel:**
1. Verifica las credenciales: `admin` / `terapias2024`
2. Limpia las cookies y localStorage
3. Intenta en otro navegador
4. Verifica que `admin-login.html` exista

## 🎉 Resumen

### **✅ Sistema Funcional:**
- Datos de prueba cargados correctamente
- Panel de administración accesible
- Todas las funcionalidades operativas
- Compatible con GitHub Pages

### **📊 Datos Disponibles:**
- 5 citas de prueba con información completa
- 5 contactos de prueba con información completa
- Total: 10 registros para probar el sistema

### **🚀 Listo para Usar:**
- Sistema de carga automática implementado
- Panel de administración funcional
- Documentación completa
- Subido a GitHub

---

**Estado:** ✅ Sistema de datos de prueba implementado y funcional  
**Datos cargados:** 10 registros (5 citas + 5 contactos)  
**Panel admin:** Accesible con credenciales admin/terapias2024  
**GitHub Pages:** Funcional y accesible desde cualquier navegador  

**Última actualización:** Septiembre 2024  
**Versión:** 1.0 (Sistema de datos de prueba)