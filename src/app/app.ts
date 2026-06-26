import { Component, AfterViewInit, ElementRef, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <div class="bg-[#F4F4F2] text-[#1A1A1A] font-sans antialiased selection:bg-[#A8B2A7] selection:text-[#1A1A1A]">
      
      <!-- Progress Bar -->
      <div class="fixed top-0 left-0 h-[3px] bg-[#1A1A1A] z-[120]" [style.width.%]="scrollProgress()"></div>

      <!-- Navbar -->
      <nav class="sticky top-0 z-[100] bg-[#F4F4F2]/90 backdrop-blur-md border-b border-[#E0E0DE]">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2 font-semibold tracking-tight uppercase text-lg">
            NURA
          </div>
          <ul class="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] opacity-60">
            <li><a href="#producto" class="hover:opacity-100 hover:text-[#A8B2A7] transition-all">Producto</a></li>
            <li><a href="#beneficios" class="hover:opacity-100 hover:text-[#A8B2A7] transition-all">Beneficios</a></li>
            <li><a href="#ecosistema" class="hover:opacity-100 hover:text-[#A8B2A7] transition-all">Ecosistema</a></li>
            <li><a href="#faq" class="hover:opacity-100 hover:text-[#A8B2A7] transition-all">FAQ</a></li>
          </ul>
          <a href="#reserva" class="px-5 py-2.5 bg-[#1A1A1A] text-[#F4F4F2] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#A8B2A7] hover:text-[#1A1A1A] transition-colors rounded-sm">
            Reservar
          </a>
        </div>
      </nav>

      <!-- Hero -->
      <header class="pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden relative">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#A8B2A7,_transparent_60%)]"></div>
        <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <div class="lg:col-span-7 reveal">
            <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Nutrición Inteligente</span>
            <h1 class="text-5xl md:text-7xl font-light tracking-tighter italic font-serif mt-4 mb-6 leading-[0.95]">
              El estándar de oro en <br><span class="opacity-60">cuidado animal.</span>
            </h1>
            <p class="text-lg opacity-80 mb-10 max-w-lg leading-relaxed">
              Nura Feeder fusiona inteligencia artificial y diseño industrial premium para dosificar, monitorear y proteger la salud preventiva de tus mascotas desde el hogar moderno.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#reserva" class="px-8 py-4 bg-[#1A1A1A] text-[#F4F4F2] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#A8B2A7] hover:text-[#1A1A1A] transition-all rounded-sm shadow-xl">
                Comprar Nura Feeder
              </a>
              <a href="#ecosistema" class="px-8 py-4 bg-white border border-[#E0E0DE] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-bold hover:border-[#1A1A1A] transition-all rounded-sm">
                Descubrir Ecosistema
              </a>
            </div>
            <div class="mt-10 flex gap-6 text-[10px] uppercase tracking-widest opacity-60 font-bold">
              <span class="flex items-center gap-2"><span class="material-icons text-[16px] text-[#A8B2A7]">verified</span> Calidad Premium</span>
              <span class="flex items-center gap-2"><span class="material-icons text-[16px] text-[#A8B2A7]">lock</span> Datos Privados</span>
            </div>
          </div>

          <!-- Hero Visual: Mock Dashboard / App -->
          <div class="lg:col-span-5 reveal" style="transition-delay: 100ms">
            <div class="bg-white border border-[#E0E0DE] p-6 rounded-sm shadow-xl relative">
              <div class="flex justify-between items-center mb-6 border-b border-[#E0E0DE] pb-4">
                <strong class="text-[10px] uppercase tracking-[0.2em] font-bold">Nura App</strong>
                <span class="flex items-center gap-2 text-[#A8B2A7] text-[9px] uppercase tracking-[0.2em] font-bold">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#A8B2A7] animate-pulse"></span> Sincronizado
                </span>
              </div>
              
              <div class="grid grid-cols-2 gap-3 mb-6">
                <div class="bg-[#F4F4F2] p-4 rounded-sm border border-[#E0E0DE]">
                  <div class="text-[9px] uppercase tracking-[0.2em] opacity-60 mb-1 font-bold">Oliver (Hoy)</div>
                  <div class="text-2xl font-light tracking-tight">45<span class="text-xs opacity-60 ml-1">g</span></div>
                  <div class="text-[9px] text-[#A8B2A7] mt-2 font-bold uppercase tracking-widest">Óptimo</div>
                </div>
                <div class="bg-[#F4F4F2] p-4 rounded-sm border border-[#E0E0DE]">
                  <div class="text-[9px] uppercase tracking-[0.2em] opacity-60 mb-1 font-bold">Próxima</div>
                  <div class="text-2xl font-light tracking-tight">18:00</div>
                  <div class="text-[9px] opacity-60 mt-2 uppercase tracking-widest">Dieta Renal</div>
                </div>
              </div>

              <!-- Metric Sparkline -->
              <div class="mt-4">
                <div class="text-[9px] uppercase tracking-[0.2em] opacity-60 mb-2 font-bold">Consumo Semanal</div>
                <div class="h-20 flex items-end gap-1">
                  <div class="flex-1 bg-[#D8D2C5] rounded-t-sm h-[60%]"></div>
                  <div class="flex-1 bg-[#D8D2C5] rounded-t-sm h-[80%]"></div>
                  <div class="flex-1 bg-[#D8D2C5] rounded-t-sm h-[70%]"></div>
                  <div class="flex-1 bg-[#A8B2A7] rounded-t-sm h-[100%] relative group cursor-pointer">
                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#F4F4F2] text-[9px] px-2 py-0.5 rounded-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">50g</div>
                  </div>
                  <div class="flex-1 bg-[#F4F4F2] rounded-t-sm h-[30%] border border-[#E0E0DE] border-b-0"></div>
                  <div class="flex-1 bg-[#F4F4F2] rounded-t-sm h-[30%] border border-[#E0E0DE] border-b-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Value Proposition -->
      <section class="py-24 bg-white border-y border-[#E0E0DE]" id="producto">
        <div class="max-w-6xl mx-auto px-6 reveal">
          <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Ingeniería de Precisión</span>
          <h2 class="text-4xl md:text-5xl font-light tracking-tighter italic font-serif mt-4 mb-6">Hardware sin compromisos.</h2>
          <p class="text-lg opacity-80 mb-16 max-w-2xl leading-relaxed">
            No diseñamos juguetes de plástico. Desarrollamos electrodomésticos premium que se integran a la estética minimalista de tu hogar y protegen la salud de tus mascotas con componentes de nivel clínico.
          </p>

          <div class="bg-[#F4F4F2] border border-[#E0E0DE] rounded-sm overflow-hidden shadow-sm">
            <table class="w-full text-left border-collapse">
              <tbody>
                <tr class="border-b border-[#E0E0DE]">
                  <th class="py-5 px-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold w-1/3">Materialidad</th>
                  <td class="py-5 px-8 text-sm font-medium">Plástico ABS mate, Acero Inoxidable de grado alimenticio 304, Aluminio anodizado.</td>
                </tr>
                <tr class="border-b border-[#E0E0DE]">
                  <th class="py-5 px-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Inteligencia Artificial</th>
                  <td class="py-5 px-8 text-sm font-medium">Cámara gran angular IA, Báscula de ultra precisión (±1g), Lector de collares BLE.</td>
                </tr>
                <tr class="border-b border-[#E0E0DE]">
                  <th class="py-5 px-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Capacidad</th>
                  <td class="py-5 px-8 text-sm font-medium">3 Litros (Aprox. 2.5kg de alimento seco), Sellado Hermético para preservar frescura.</td>
                </tr>
                <tr class="border-b border-[#E0E0DE]">
                  <th class="py-5 px-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Conectividad</th>
                  <td class="py-5 px-8 text-sm font-medium">Wi-Fi Dual Band, Bluetooth 5.0, App Nativa iOS y Android.</td>
                </tr>
                <tr>
                  <th class="py-5 px-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Mantenimiento</th>
                  <td class="py-5 px-8 text-sm font-medium">Tolva y plato inferior desmontables con un clic, 100% aptos para lavavajillas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="py-24 bg-[#F4F4F2]" id="beneficios">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-20 reveal">
            <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Beneficios Core</span>
            <h2 class="text-4xl md:text-5xl font-light tracking-tighter italic font-serif mt-4 mb-6">Tranquilidad en cada bocado.</h2>
            <p class="text-lg opacity-80 leading-relaxed">Las capacidades centrales que convierten a Nura en la herramienta definitiva de salud preventiva para tus mascotas.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white border border-[#E0E0DE] p-10 rounded-sm hover:border-[#1A1A1A] transition-colors reveal shadow-sm hover:shadow-md">
              <div class="w-14 h-14 bg-[#F4F4F2] border border-[#E0E0DE] rounded-sm flex items-center justify-center mb-8">
                <span class="material-icons text-[#1A1A1A] opacity-80">pets</span>
              </div>
              <h3 class="text-xl font-light tracking-tight mb-4">Identifica</h3>
              <p class="text-sm opacity-80 leading-relaxed">Ideal para hogares multi-mascota. La tapa se abre exclusivamente para la mascota correcta mediante IA o sensor BLE, evitando robos de comida clínica.</p>
            </div>
            <div class="bg-white border border-[#E0E0DE] p-10 rounded-sm hover:border-[#1A1A1A] transition-colors reveal delay-100 shadow-sm hover:shadow-md">
              <div class="w-14 h-14 bg-[#F4F4F2] border border-[#E0E0DE] rounded-sm flex items-center justify-center mb-8">
                <span class="material-icons text-[#1A1A1A] opacity-80">restaurant</span>
              </div>
              <h3 class="text-xl font-light tracking-tight mb-4">Dosifica</h3>
              <p class="text-sm opacity-80 leading-relaxed">Olvídate de calcular a ojo. Ajusta las porciones al gramo exacto según prescripciones veterinarias para combatir la obesidad y garantizar su peso ideal.</p>
            </div>
            <div class="bg-white border border-[#E0E0DE] p-10 rounded-sm hover:border-[#1A1A1A] transition-colors reveal delay-200 shadow-sm hover:shadow-md">
              <div class="w-14 h-14 bg-[#F4F4F2] border border-[#E0E0DE] rounded-sm flex items-center justify-center mb-8">
                <span class="material-icons text-[#1A1A1A] opacity-80">insights</span>
              </div>
              <h3 class="text-xl font-light tracking-tight mb-4">Analiza</h3>
              <p class="text-sm opacity-80 leading-relaxed">Monitoreo continuo en la nube. La app genera reportes de sus hábitos diarios y envía notificaciones preventivas si detecta inapetencia o anomalías.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scrollytelling / Ecosystem -->
      <section class="py-24 bg-white border-t border-[#E0E0DE]" id="ecosistema">
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-16 reveal">
            <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Ecosistema</span>
            <h2 class="text-4xl md:text-5xl font-light tracking-tighter italic font-serif mt-4 mb-6">La automatización invisible.</h2>
            <p class="text-lg opacity-80 leading-relaxed max-w-2xl">Descubre el flujo de datos exacto de nuestro ecosistema Nura: desde que tu mascota se acerca al dispositivo, hasta que la información de salud llega a tu smartphone.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-16 relative">
            
            <!-- Sticky Visual -->
            <div class="hidden md:flex sticky top-32 h-[400px] bg-[#F4F4F2] border border-[#E0E0DE] rounded-sm flex-col items-center justify-center transition-all duration-500 overflow-hidden shadow-sm">
              <div class="w-32 h-32 rounded-full border-2 bg-white flex items-center justify-center mb-10 transition-all duration-500 shadow-xl"
                   [style.border-color]="visualStep.color">
                <span class="material-icons text-5xl transition-colors duration-500" [style.color]="visualStep.color">{{visualStep.icon}}</span>
              </div>
              <h4 class="text-3xl font-light tracking-tight mb-3 transition-colors duration-500">{{visualStep.title}}</h4>
              <p class="text-sm opacity-60 max-w-[240px] text-center leading-relaxed">{{visualStep.desc}}</p>
            </div>

            <!-- Scroll Steps -->
            <div class="space-y-6 pb-24 md:pb-64">
              <div class="story-step bg-[#F4F4F2] border-l-[6px] border-transparent p-8 rounded-sm opacity-40 transition-all duration-500" data-step="0" [class.opacity-100]="activeStep() === 0" [style.border-color]="activeStep() === 0 ? '#A8B2A7' : 'transparent'">
                <div class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Paso 01</div>
                <h3 class="text-2xl font-light tracking-tight mb-4">Identidad Biométrica</h3>
                <p class="text-sm opacity-80 leading-relaxed">Cuando la mascota se acerca al plato, los sensores de visión procesan la geometría facial, o el escáner BLE lee su placa. Se valida su identidad en milisegundos y la compuerta se desbloquea únicamente si es su turno de comer.</p>
              </div>
              
              <div class="story-step bg-[#F4F4F2] border-l-[6px] border-transparent p-8 rounded-sm opacity-40 transition-all duration-500" data-step="1" [class.opacity-100]="activeStep() === 1" [style.border-color]="activeStep() === 1 ? '#1A1A1A' : 'transparent'">
                <div class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Paso 02</div>
                <h3 class="text-2xl font-light tracking-tight mb-4">Dispensado de Precisión</h3>
                <p class="text-sm opacity-80 leading-relaxed">Un sistema de aspas impulsado por un motor de alto torque libera la cantidad de alimento exacta (con un margen de error máximo de ±1g) definida previamente en el plan nutricional dentro de tu aplicación Nura.</p>
              </div>
              
              <div class="story-step bg-[#F4F4F2] border-l-[6px] border-transparent p-8 rounded-sm opacity-40 transition-all duration-500" data-step="2" [class.opacity-100]="activeStep() === 2" [style.border-color]="activeStep() === 2 ? '#D8D2C5' : 'transparent'">
                <div class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Paso 03</div>
                <h3 class="text-2xl font-light tracking-tight mb-4">Telemetría en Tiempo Real</h3>
                <p class="text-sm opacity-80 leading-relaxed">El plato de acero reposa sobre una celda de carga de alta sensibilidad. Pesa la cantidad servida versus la que la mascota deja en el plato. Calcula el consumo real, el tiempo de ingesta y la velocidad con la que comió.</p>
              </div>
              
              <div class="story-step bg-[#F4F4F2] border-l-[6px] border-transparent p-8 rounded-sm opacity-40 transition-all duration-500" data-step="3" [class.opacity-100]="activeStep() === 3" [style.border-color]="activeStep() === 3 ? '#A8B2A7' : 'transparent'">
                <div class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Paso 04</div>
                <h3 class="text-2xl font-light tracking-tight mb-4">Insights de Salud</h3>
                <p class="text-sm opacity-80 leading-relaxed">Los datos se transmiten a la nube. Si nuestros algoritmos detectan una caída inusual en el consumo, o cambios radicales en la velocidad de ingesta, recibes una alerta preventiva temprana para agendar una visita al veterinario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials / Trust -->
      <section class="py-24 bg-[#F4F4F2] border-y border-[#E0E0DE]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-20 reveal">
            <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Testimonios</span>
            <h2 class="text-4xl md:text-5xl font-light tracking-tighter italic font-serif mt-4">Quienes ya confían en Nura</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 mb-20">
            <div class="bg-white border border-[#E0E0DE] p-8 rounded-sm reveal shadow-sm">
              <div class="flex items-center gap-1 text-[#1A1A1A] mb-6">
                <span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span>
              </div>
              <p class="text-sm opacity-80 leading-relaxed mb-8 italic font-serif">"Por fin puedo dejar a mis dos gatos solos sin que uno se coma la comida del otro, especialmente su dieta clínica. El diseño es hermoso, de verdad parece diseñado por Apple, se ve súper elegante."</p>
              <div class="flex items-center gap-4 border-t border-[#E0E0DE] pt-6">
                <div class="w-10 h-10 bg-[#D8D2C5] rounded-full flex items-center justify-center font-bold text-[10px] uppercase text-[#1A1A1A] tracking-widest">SR</div>
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-widest">Sofía R.</div>
                  <div class="text-[9px] opacity-60 uppercase tracking-widest">Arquitecta</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-[#E0E0DE] p-8 rounded-sm reveal delay-100 shadow-sm">
              <div class="flex items-center gap-1 text-[#1A1A1A] mb-6">
                <span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span>
              </div>
              <p class="text-sm opacity-80 leading-relaxed mb-8 italic font-serif">"La app me avisó que Milo llevaba dos días comiendo un 20% menos de lo normal. Fuimos al veterinario a tiempo y logramos tratarlo. Nura no es un juguete, es una herramienta médica preventiva."</p>
              <div class="flex items-center gap-4 border-t border-[#E0E0DE] pt-6">
                <div class="w-10 h-10 bg-[#A8B2A7] rounded-full flex items-center justify-center font-bold text-[10px] uppercase text-[#1A1A1A] tracking-widest">AV</div>
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-widest">Andrés V.</div>
                  <div class="text-[9px] opacity-60 uppercase tracking-widest">Abogado</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white border border-[#E0E0DE] p-8 rounded-sm reveal delay-200 shadow-sm">
              <div class="flex items-center gap-1 text-[#1A1A1A] mb-6">
                <span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span><span class="material-icons text-sm">star</span>
              </div>
              <p class="text-sm opacity-80 leading-relaxed mb-8 italic font-serif">"Adiós a los plásticos feos de colores chillones en mi cocina. Nura se integra perfecto con mis electrodomésticos minimalistas, el acero inoxidable se limpia rapidísimo y la conexión Wi-Fi nunca falla."</p>
              <div class="flex items-center gap-4 border-t border-[#E0E0DE] pt-6">
                <div class="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center font-bold text-[10px] uppercase text-[#F4F4F2] tracking-widest">LM</div>
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-widest">Laura M.</div>
                  <div class="text-[9px] opacity-60 uppercase tracking-widest">Diseñadora Industrial</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Badges -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            <div class="bg-white border border-[#E0E0DE] p-6 rounded-sm flex items-center gap-4 shadow-sm">
              <span class="material-icons text-2xl text-[#A8B2A7]">shield</span>
              <div>
                <strong class="block text-[10px] uppercase tracking-widest font-bold">1 Año Garantía</strong>
                <span class="text-[10px] opacity-60 font-medium">Soporte premium</span>
              </div>
            </div>
            <div class="bg-white border border-[#E0E0DE] p-6 rounded-sm flex items-center gap-4 shadow-sm">
              <span class="material-icons text-2xl text-[#A8B2A7]">lock</span>
              <div>
                <strong class="block text-[10px] uppercase tracking-widest font-bold">Datos Cifrados</strong>
                <span class="text-[10px] opacity-60 font-medium">Privacidad total E2E</span>
              </div>
            </div>
            <div class="bg-white border border-[#E0E0DE] p-6 rounded-sm flex items-center gap-4 shadow-sm">
              <span class="material-icons text-2xl text-[#A8B2A7]">battery_charging_full</span>
              <div>
                <strong class="block text-[10px] uppercase tracking-widest font-bold">Batería Backup</strong>
                <span class="text-[10px] opacity-60 font-medium">7 días sin electricidad</span>
              </div>
            </div>
            <div class="bg-white border border-[#E0E0DE] p-6 rounded-sm flex items-center gap-4 shadow-sm">
              <span class="material-icons text-2xl text-[#A8B2A7]">local_shipping</span>
              <div>
                <strong class="block text-[10px] uppercase tracking-widest font-bold">Envío Gratis</strong>
                <span class="text-[10px] opacity-60 font-medium">Cobertura global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-32 bg-white relative overflow-hidden text-center border-b border-[#E0E0DE]" id="reserva">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#A8B2A7,_transparent_50%)]"></div>
        <div class="max-w-2xl mx-auto px-6 relative z-10 reveal">
          <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px] block mb-4">El futuro ha llegado</span>
          <h2 class="text-5xl font-light tracking-tighter italic font-serif mb-8">Únete a la revolución <br>del bienestar animal.</h2>
          <p class="text-lg opacity-80 mb-12 leading-relaxed">
            Asegura la salud a largo plazo de tus mascotas con el ecosistema de cuidado inteligente Nura.
          </p>
          <a href="#" class="inline-block px-12 py-5 bg-[#1A1A1A] text-[#F4F4F2] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#A8B2A7] hover:text-[#1A1A1A] transition-all rounded-sm shadow-xl">
            Reservar Nura Feeder — $199 USD
          </a>
          <p class="mt-8 text-[10px] uppercase tracking-widest opacity-50 font-bold">Stock de lanzamiento limitado. Entregas en 48hs hábiles.</p>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-24 bg-[#F4F4F2]" id="faq">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-16 reveal">
            <span class="text-[#A8B2A7] font-bold uppercase tracking-[0.2em] text-[10px]">Preguntas Frecuentes</span>
            <h2 class="text-4xl font-light tracking-tighter italic font-serif mt-4">Todo lo que necesitas saber.</h2>
          </div>
          
          <div class="space-y-4">
            @for (faq of faqs(); track $index) {
              <div class="bg-white border border-[#E0E0DE] rounded-sm overflow-hidden reveal shadow-sm" [style.transition-delay]="$index * 50 + 'ms'">
                <button class="w-full px-8 py-6 text-left flex justify-between items-center text-sm font-medium tracking-tight hover:bg-[#F4F4F2] transition-colors" (click)="toggleFaq($index)">
                  {{faq.q}}
                  <span class="material-icons transform transition-transform duration-300 text-[#A8B2A7]" [class.rotate-45]="faq.open">add</span>
                </button>
                <div class="overflow-hidden transition-all duration-300 bg-white" [style.max-height]="faq.open ? '200px' : '0px'">
                  <div class="px-8 pb-6 text-sm opacity-80 leading-relaxed border-t border-[#E0E0DE] pt-6">
                    {{faq.a}}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-white pt-20 pb-10 border-t border-[#E0E0DE]">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid md:grid-cols-4 gap-12 mb-16">
            <div class="md:col-span-2">
              <div class="font-semibold tracking-tight uppercase text-2xl mb-4">NURA</div>
              <p class="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 max-w-sm leading-relaxed">
                Plataforma global estándar de salud preventiva y automatización del hogar para mascotas. Diseñado en California.
              </p>
            </div>
            <div>
              <h5 class="text-[9px] uppercase tracking-[0.2em] font-bold text-[#A8B2A7] mb-6">Ecosistema</h5>
              <ul class="space-y-4 text-xs font-medium opacity-80 tracking-tight">
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Nura Feeder</a></li>
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Nura App (iOS / Android)</a></li>
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Accesorios & Recambios</a></li>
              </ul>
            </div>
            <div>
              <h5 class="text-[9px] uppercase tracking-[0.2em] font-bold text-[#A8B2A7] mb-6">Compañía</h5>
              <ul class="space-y-4 text-xs font-medium opacity-80 tracking-tight">
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Nuestra Visión</a></li>
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Soporte Técnico</a></li>
                <li><a href="#" class="hover:opacity-100 hover:text-[#A8B2A7] transition-colors">Contacto de Prensa</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-[#E0E0DE] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">
            <div>© 2026 Nura PetTech Inc. Todos los derechos reservados.</div>
            <div class="flex gap-8">
              <a href="#" class="hover:opacity-100 hover:text-[#1A1A1A]">Políticas de Privacidad</a>
              <a href="#" class="hover:opacity-100 hover:text-[#1A1A1A]">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  `,
  styles: [`
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.in { opacity: 1; transform: none; }
  `]
})
export class App implements AfterViewInit {
  scrollProgress = signal(0);
  activeStep = signal(0);
  
  faqs = signal([
    { q: '¿Funciona para hogares con varios gatos o mascotas?', a: 'Sí. Gracias al sistema de visión artificial y al escáner BLE del collar, el dispositivo reconoce a cada mascota individualmente. La tapa hermética solo se abrirá para la mascota correcta, garantizando que nadie robe comida clínica o dietética.', open: false },
    { q: '¿Es difícil de limpiar y mantener en el día a día?', a: 'En absoluto. Diseñamos Nura pensando en la higiene. El cuenco de acero inoxidable 304 de grado alimenticio y la tolva plástica interior se desmontan con un solo clic y son 100% aptos para lavavajillas.', open: false },
    { q: '¿Qué pasa si se corta la electricidad o se cae el Wi-Fi?', a: 'Tu mascota nunca se quedará sin comer. Nura Feeder cuenta con una batería de respaldo oculta que garantiza hasta 7 días de funcionamiento autónomo. Si no hay Wi-Fi, seguirá sirviendo las raciones programadas en su memoria interna.', open: false },
    { q: '¿Puedo usar alimento húmedo o dietas tipo BARF?', a: 'El Nura Feeder V1 está diseñado exclusivamente para alimento seco (croquetas de 5mm a 15mm) para garantizar una precisión micrométrica en la dosificación y prevenir atascos. Estamos desarrollando nuevos módulos para otro tipo de dietas.', open: false }
  ]);

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    this.scrollProgress.set(pct);
  }

  ngAfterViewInit() {
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: any) => revObs.observe(el));

    const storyObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const index = parseInt((e.target as HTMLElement).dataset['step'] || '0', 10);
          this.activeStep.set(index);
        }
      });
    }, { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' });
    
    this.el.nativeElement.querySelectorAll('.story-step').forEach((el: any) => storyObs.observe(el));
  }

  toggleFaq(index: number) {
    this.faqs.update(list => list.map((item, i) => i === index ? { ...item, open: !item.open } : { ...item, open: false }));
  }

  get visualStep() {
    const stepsData = [
      { icon: 'camera', title: 'Reconoce', desc: 'Identifica a la mascota individualmente mediante biometría.', color: '#A8B2A7' },
      { icon: 'restaurant', title: 'Sirve', desc: 'Dosifica la ración exacta según el plan veterinario.', color: '#1A1A1A' },
      { icon: 'insights', title: 'Monitorea', desc: 'Registra los hábitos y la velocidad de consumo diario.', color: '#D8D2C5' },
      { icon: 'notifications', title: 'Alerta', desc: 'Notifica anomalías y patrones de inapetencia.', color: '#A8B2A7' }
    ];
    return stepsData[this.activeStep()] || stepsData[0];
  }
}
