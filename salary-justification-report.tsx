import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Code,
  Database,
  Globe,
  Lock,
  Mic,
  Settings,
  Users,
  Zap,
  Brain,
  FileText,
  TrendingUp,
  Server,
  GraduationCap,
  HeadphonesIcon,
  Shield,
  Cpu,
  Cloud,
} from "lucide-react"

export default function SalaryJustificationReport() {
  const currentSalary = 9200000
  const proposedSalary = 12000000
  const increase = (((proposedSalary - currentSalary) / currentSalary) * 100).toFixed(1)

  const responsibilities = [
    "Desarrollo Fullstack",
    "Arquitectura de Software",
    "Integración de IA",
    "DevOps & Infrastructure",
    "Soporte Técnico 24/7",
    "Documentación ISO",
    "Propuestas Comerciales",
    "Reuniones con Clientes",
    "Mentorías Técnicas",
  ]

  const technicalAchievements = [
    { category: "Componentes Desarrollados", value: "100+", icon: Code },
    { category: "Hooks Personalizados", value: "30+", icon: Settings },
    { category: "Idiomas Soportados", value: "3", icon: Globe },
    { category: "Endpoints API", value: "15+", icon: Database },
    { category: "Archivos de Documentación", value: "50+", icon: FileText },
  ]

  const functionalityCategories = [
    { name: "Sistema de Autenticación", icon: Lock, features: 4 },
    { name: "Transcripción en Tiempo Real", icon: Mic, features: 4 },
    { name: "Generación de Reportes con IA", icon: Brain, features: 4 },
    { name: "Sistema de Plantillas", icon: FileText, features: 4 },
    { name: "Gestión de Archivos", icon: Database, features: 4 },
    { name: "Editor Avanzado", icon: Code, features: 4 },
    { name: "Configuración Personal", icon: Settings, features: 4 },
    { name: "Sistema Multiidioma", icon: Globe, features: 4 },
    { name: "Colaboración en Tiempo Real", icon: Users, features: 3 },
    { name: "Funcionalidades de Seguridad", icon: Lock, features: 3 },
    { name: "Monitoreo y UX", icon: Zap, features: 4 },
  ]

  const techStack = [
    "React + TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "OpenAI + LLMs",
    "N8N Automation",
    "DIFY Platform",
    "RAG Architecture",
    "MongoDB + PostgreSQL",
    "Deepgram API",
    "Clara LLM API",
    "Strapi CMS",
    "JWT + OAuth",
    "React i18next",
    "React Query",
    "Docker + Kubernetes",
    "AWS Multi-Account",
    "CI/CD Pipelines",
  ]

  const devopsAchievements = [
    {
      title: "Servidores Gestionados",
      count: "15+",
      description: "Infraestructura cloud y on-premise optimizada",
      icon: Server,
    },
    {
      title: "Cuentas AWS Gestionadas",
      count: "5",
      description: "Multi-account architecture y governance",
      icon: Cloud,
    },
    {
      title: "Uptime Garantizado",
      count: "99.9%",
      description: "Disponibilidad de servicios críticos",
      icon: Shield,
    },
    {
      title: "Usuarios Soportados",
      count: "25K+",
      description: "ArmCare - Escalabilidad y performance",
      icon: Users,
    },
  ]

  const mentorshipAchievements = [
    {
      title: "Desarrolladores Formados",
      count: "4+",
      description: "Miembros del equipo capacitados en tecnologías modernas",
    },
    { title: "Sesiones de Mentoría", count: "75+", description: "Horas dedicadas a formación técnica individual" },
    { title: "Documentación Técnica", count: "35+", description: "Guías y tutoriales creados para el equipo" }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gradient-to-br from-slate-50 to-white min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-400 via-orange-500 via-amber-400 to-orange-500"></div>
      <div className="absolute top-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-violet-100/20 to-purple-100/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Header */}
      <div className="text-center space-y-4 relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-xl"></div>

        <h1 className="text-4xl font-bold text-slate-900 font-mono tracking-tight relative z-10 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text">
          PROPUESTA DE AJUSTE DE COMPENSACIÓN
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        <p className="text-lg text-slate-600 font-medium relative z-10">
          Sustentación basada en contribuciones y responsabilidades actuales
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500 font-mono relative z-10">
          <span>Fecha: {new Date().toLocaleDateString("es-ES")}</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Proyecto: Clara.care</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-amber-600 font-medium">CONFIDENCIAL</span>
        </div>
      </div>



      {/* Executive Summary */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-600" />
            Propuesta de Ajuste de Compensación
          </CardTitle>
          <CardDescription>Análisis de mercado y retorno de inversión</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-slate-200/50 rounded-full blur-sm"></div>
              <div className="text-xl font-bold text-slate-900 font-mono relative z-10">
                ${currentSalary.toLocaleString("es-CO")}
              </div>
              <div className="text-sm text-slate-600">Actual</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber-200/50 rounded-full blur-sm"></div>
              <div className="text-xl font-bold text-amber-700 font-mono relative z-10">
                ${proposedSalary.toLocaleString("es-CO")}
              </div>
              <div className="text-sm text-amber-600">Propuesta</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-200/50 rounded-full blur-sm"></div>
              <div className="text-xl font-bold text-emerald-700 font-mono relative z-10">+{increase}%</div>
              <div className="text-sm text-emerald-600">Incremento</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl border border-violet-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-violet-200/50 rounded-full blur-sm"></div>
              <div className="text-xl font-bold text-violet-700 font-mono relative z-10">$25M+</div>
              <div className="text-sm text-violet-600">Ahorro vs. 3 roles</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Contexto de Mercado (Colombia 2024):</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <span>Senior Fullstack Developer</span>
                  <span className="font-medium">$8M - $15M</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <span>DevOps Engineer</span>
                  <span className="font-medium">$10M - $16M</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <span>Tech Lead/Architect</span>
                  <span className="font-medium">$12M - $20M</span>
                </div>
                <div className="flex justify-between p-2 bg-gradient-to-r from-amber-50 to-amber-100 rounded border-2 border-amber-300">
                  <span className="font-medium">Mi Rol Multidisciplinario</span>
                  <span className="font-bold text-amber-700">${proposedSalary.toLocaleString("es-CO")}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">ROI para Soluntech:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Evita contratar 3-4 especialistas adicionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Clara.care lista para comercialización</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Infraestructura DevOps optimizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Equipo técnico formado y productivo</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>




      {/* Current Responsibilities */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-100/20 to-green-100/20 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-600" />
            Responsabilidades Actuales
          </CardTitle>
          <CardDescription>Áreas de trabajo y contribución activa al proyecto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg border border-emerald-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-100/50 rounded-full blur-sm"></div>
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium relative z-10">{responsibility}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>



            {/* Conclusion */}
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-slate-200/50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide relative z-10">Propuesta Flexible y Conclusión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-white to-amber-50 rounded-xl border-2 border-amber-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber-200/30 rounded-full blur-sm"></div>
              <h4 className="font-semibold text-amber-900 mb-2 relative z-10">Opción A: Ajuste Directo</h4>
              <div className="text-2xl font-bold text-amber-700 mb-1 font-mono relative z-10">$12M COP</div>
              <p className="text-sm text-amber-600 relative z-10">Compensación mensual fija</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-white to-emerald-50 rounded-xl border-2 border-emerald-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-200/30 rounded-full blur-sm"></div>
              <h4 className="font-semibold text-emerald-900 mb-2 relative z-10">Opción B: Base + Bonos</h4>
              <div className="text-2xl font-bold text-emerald-700 mb-1 font-mono relative z-10">$10.5M + Bonos</div>
              <p className="text-sm text-emerald-600 relative z-10">Base + bonos por proyectos comerciales</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-white to-violet-50 rounded-xl border-2 border-violet-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-violet-200/30 rounded-full blur-sm"></div>
              <h4 className="font-semibold text-violet-900 mb-2 relative z-10">Opción C: Gradual</h4>
              <div className="text-2xl font-bold text-violet-700 mb-1 font-mono relative z-10">$10.5M → $12M</div>
              <p className="text-sm text-violet-600 relative z-10">Incremento en 3 meses con revisión</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-white to-orange-50 rounded-xl border-2 border-orange-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-orange-200/30 rounded-full blur-sm"></div>
              <h4 className="font-semibold text-orange-900 mb-2 relative z-10">Opción D: Redefinición de Rol</h4>
              <div className="text-lg font-bold text-orange-700 mb-1 font-mono relative z-10">TECH LEAD / CTO</div>
              <p className="text-sm text-orange-600 relative z-10">Formalizar responsabilidades y estructura</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-blue-800 leading-relaxed">
              <strong>Mi compromiso:</strong> Continuar generando valor excepcional para Soluntech, manteniendo la
              versatilidad que nos permite ser más eficientes y competitivos en el mercado.
            </p>

            <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-orange-100/30 rounded-full blur-lg"></div>
              <h5 className="font-semibold text-orange-900 mb-3 relative z-10">
                Alternativa: Redefinición Estratégica del Rol
              </h5>
              <p className="text-orange-800 text-sm leading-relaxed mb-3 relative z-10">
                Si las opciones de compensación no se alinean con la estructura actual, estoy abierto a explorar una
                <strong> redefinición formal de mi posición</strong> que refleje mejor las responsabilidades que
                actualmente manejo.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm relative z-10">
                <div>
                  <h6 className="font-medium text-green-900 mb-2">Posibles Títulos:</h6>
                  <ul className="text-green-700 space-y-1">
                    <li>
                      • <strong>Technical Lead</strong> - Liderazgo técnico y arquitectura
                    </li>
                    <li>
                      • <strong>CTO</strong> - Dirección tecnológica integral
                    </li>
                    <li>
                      • <strong>Head of Engineering</strong> - Gestión técnica y comercial
                    </li>
                    <li>
                      • <strong>Principal DevOps Engineer</strong> - Infraestructura + mentoría
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium text-green-900 mb-2">Beneficios de la Redefinición:</h6>
                  <ul className="text-green-700 space-y-1">
                    <li>• Claridad en responsabilidades y expectativas</li>
                    <li>• Estructura organizacional más definida</li>
                    <li>• Mejor alineación con el crecimiento de Soluntech</li>
                    <li>• Justificación natural para ajuste salarial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-1 right-1 w-6 h-6 bg-blue-100/30 rounded-full blur-sm"></div>
                <h5 className="font-semibold text-blue-900 mb-2 relative z-10">Beneficios Inmediatos:</h5>
                <ul className="text-sm text-blue-700 space-y-1 relative z-10">
                  <li>• Clara.care lista para generar ingresos</li>
                  <li>• Ahorro operativo de $19M+ mensual</li>
                  <li>• Infraestructura robusta y escalable</li>
                  <li>• Equipo técnico formado y productivo</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-1 right-1 w-6 h-6 bg-blue-100/30 rounded-full blur-sm"></div>
                <h5 className="font-semibold text-blue-900 mb-2 relative z-10">Proyección a Futuro:</h5>
                <ul className="text-sm text-blue-700 space-y-1 relative z-10">
                  <li>• Escalabilidad automática de la plataforma</li>
                  <li>• Nuevas oportunidades comerciales</li>
                  <li>• Liderazgo técnico consolidado</li>
                  <li>• ROI sostenible a largo plazo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg border-2 border-slate-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-slate-200/50 rounded-lg"></div>
            <p className="text-sm text-slate-800 font-medium text-center relative z-10">
              Estoy disponible para discutir cualquiera de estas opciones y encontrar la solución que mejor se adapte a
              los objetivos de crecimiento de Soluntech. 🤝
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Análisis Costo-Beneficio */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100/30 to-gray-100/30 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Análisis Costo-Beneficio para Soluntech
          </CardTitle>
          <CardDescription>Comparación de costos vs. contratación de especialistas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-red-700">Escenario: Contratar Especialistas Separados</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gradient-to-r from-red-50 to-red-100 rounded border border-red-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-red-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Senior Fullstack Developer</span>
                  <span className="font-medium text-red-700 relative z-10">$12M</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-red-50 to-red-100 rounded border border-red-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-red-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">DevOps Engineer</span>
                  <span className="font-medium text-red-700 relative z-10">$11M</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-red-50 to-red-100 rounded border border-red-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-red-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Technical Mentor</span>
                  <span className="font-medium text-red-700 relative z-10">$8M</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-red-100 to-red-200 rounded border-2 border-red-400 font-bold shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-300/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Total Mensual</span>
                  <span className="text-red-800 relative z-10">$31M COP</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-emerald-700">Escenario: Mi Rol Multidisciplinario</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded border border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Desarrollo + Arquitectura</span>
                  <span className="text-emerald-600 relative z-10">✓ Incluido</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded border border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">DevOps + Infrastructure</span>
                  <span className="text-emerald-600 relative z-10">✓ Incluido</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded border border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-200/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Mentoría + Soporte 24/7</span>
                  <span className="text-emerald-600 relative z-10">✓ Incluido</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded border-2 border-emerald-400 font-bold shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-300/50 rounded-full blur-sm"></div>
                  <span className="relative z-10">Total Propuesto</span>
                  <span className="text-emerald-800 relative z-10">$12M COP</span>
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-xl border border-emerald-300 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-emerald-300/50 rounded-xl"></div>
                <div className="text-lg font-bold text-emerald-900 relative z-10">Ahorro: $19M COP/mes</div>
                <div className="text-sm text-emerald-800 relative z-10">61% menos costo operativo</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Achievements */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-violet-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-violet-100/20 to-purple-100/20 rounded-full blur-xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Code className="h-5 w-5 text-violet-600" />
            Logros Técnicos Cuantificables
          </CardTitle>
          <CardDescription>Métricas de desarrollo y contribución técnica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4">
            {technicalAchievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl border border-violet-200 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-1 right-1 w-6 h-6 bg-violet-100/50 rounded-full blur-sm"></div>
                  <Icon className="h-8 w-8 mx-auto mb-2 text-violet-600" />
                  <div className="text-2xl font-bold text-slate-900 font-mono relative z-10">{achievement.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{achievement.category}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Platform Features */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-amber-100/20 rounded-full blur-2xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Brain className="h-5 w-5 text-orange-600" />
            Funcionalidades Desarrolladas en Clara.care
          </CardTitle>
          <CardDescription>Sistema completo de transcripción médica con IA</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {functionalityCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-200 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-1 right-1 w-4 h-4 bg-orange-100/50 rounded-full blur-sm"></div>
                  <Icon className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div className="flex-1 relative z-10">
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs text-gray-600">{category.features} funcionalidades implementadas</div>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 relative z-10">
                    ✓ Completo
                  </Badge>
                </div>
              )
            })}
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100/30 rounded-full blur-lg"></div>
            <h4 className="font-semibold text-orange-800 mb-2 relative z-10">Destacados del Sistema:</h4>
            <ul className="text-sm text-orange-700 space-y-1 relative z-10">
              <li>• Transcripción en tiempo real con Deepgram WebSocket</li>
              <li>• Generación automática de reportes médicos con IA</li>
              <li>• Sistema multiidioma completo (ES, EN, PT)</li>
              <li>• Editor avanzado con comparación de versiones</li>
              <li>• Compliance médico (HIPAA) y seguridad avanzada</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-100/20 to-indigo-100/20 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Database className="h-5 w-5 text-slate-600" />
            Stack Tecnológico Implementado
          </CardTitle>
          <CardDescription>Tecnologías modernas y especializadas utilizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border-indigo-200 font-mono text-xs shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-3 h-3 bg-indigo-100/50 rounded-full blur-sm"></div>
                <span className="relative z-10">{tech}</span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Value Proposition */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-amber-100/20 to-yellow-100/20 rounded-full blur-xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-600" />
            Propuesta de Valor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contribuciones Clave:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Desarrollo completo de plataforma médica con IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Arquitectura escalable y segura (compliance HIPAA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Infraestructura DevOps completa y automatizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Soporte técnico 24/7 y formación del equipo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Participación activa en desarrollo comercial</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Impacto en el Negocio:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Plataforma funcional y lista para comercialización</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Infraestructura robusta con 99.9% uptime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Equipo técnico formado y autónomo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Documentación completa y procesos establecidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Reducción significativa de costos operativos</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Profile & Experience - AHORA DESPUÉS */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-600" />
            Perfil Profesional y Experiencia
          </CardTitle>
          <CardDescription>Trayectoria profesional y contribuciones destacadas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Perfil Profesional
              </h4>
              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <p className="text-sm text-indigo-800 leading-relaxed">
                  Profesional especializado en el diseño y desarrollo de aplicaciones personalizadas, adhiriéndose a
                  estándares de calidad y ética. Versátil con un conjunto diverso de habilidades y experiencia en
                  desarrollo de datos y software.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs text-indigo-600">GitHub: santiblanko | 3000+ descargas semanales</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Información Personal
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-white rounded border border-indigo-100">
                  <span className="text-indigo-700">Nombre Completo</span>
                  <span className="font-medium text-indigo-900">Santiago Blanco Vilchez</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded border border-indigo-100">
                  <span className="text-indigo-700">Ubicación</span>
                  <span className="font-medium text-indigo-900">Medellín, Colombia</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded border border-indigo-100">
                  <span className="text-indigo-700">Nacionalidad</span>
                  <span className="font-medium text-indigo-900">Española, Colombiana</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded border border-indigo-100">
                  <span className="text-indigo-700">Idiomas</span>
                  <span className="font-medium text-indigo-900">Español (Nativo), Inglés (B2)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-indigo-900">Experiencia Laboral Destacada</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Soluntech (Actual)</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Fullstack Developer | Julio 2022 - Presente</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Gestión de 15+ servidores y 5 cuentas AWS</li>
                  <li>• Escalabilidad de ArmCare (25,000+ usuarios activos)</li>
                  <li>• Implementación de LLMs, RAG y automatización N8N</li>
                  <li>• Desarrollo de dashboards con BigQuery y Looker</li>
                  <li>• Arquitectura multi-cloud y microservicios</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Pronoide (España)</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">DevOps Instructor | Julio - Diciembre 2021</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Instructor especializado en Docker y Kubernetes</li>
                  <li>• Capacitación a organizaciones públicas y privadas</li>
                  <li>• Diseño de workshops personalizados</li>
                  <li>• Servicios AWS avanzados</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Universidad de Antioquia</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Systems Engineer | 2011 - 2018</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Sistemas de información para sector energético</li>
                  <li>• Análisis de demanda eléctrica en tiempo real</li>
                  <li>• Sistemas GIS para educación superior</li>
                  <li>• Gestión de servicios públicos</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Proyectos Internacionales</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Adagio Group (Miami) | Iota Impact</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Calculadoras web para industria financiera</li>
                  <li>• Análisis de tráfico de clientes</li>
                  <li>• Dashboards para plataformas metaverso</li>
                  <li>• Soluciones de investigación de mercado</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Universidad de los Andes</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Systems Engineer | Proyectos Especializados</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Desarrollo de sistemas geoespaciales avanzados</li>
                  <li>• Análisis de datos geográficos y cartografía digital</li>
                  <li>• Integración de tecnologías GIS empresariales</li>
                  <li>• Consultoría técnica en proyectos de investigación</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Agencia Nacional de Minería</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">GIS Specialist | Sector Gubernamental</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Sistemas de información geográfica para minería</li>
                  <li>• Análisis espacial y cartografía especializada</li>
                  <li>• Desarrollo de herramientas de gestión territorial</li>
                  <li>• Soporte técnico a entidades gubernamentales</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Área Metropolitana</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Systems Engineer | Proyectos Metropolitanos</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Desarrollo de sistemas de información metropolitana</li>
                  <li>• Gestión de proyectos de infraestructura tecnológica</li>
                  <li>• Integración de servicios públicos regionales</li>
                  <li>• Análisis de datos urbanos y planificación</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <h5 className="font-medium text-indigo-900">Melt Studio & Mantum</h5>
                </div>
                <p className="text-xs text-indigo-600 mb-2">Software Developer | Empresas de Software</p>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• Desarrollo de aplicaciones web personalizadas</li>
                  <li>• Arquitectura de software para startups</li>
                  <li>• Consultoría técnica especializada</li>
                  <li>• Implementación de soluciones escalables</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DevOps & Infrastructure */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-600" />
            DevOps & Infrastructure Leadership
          </CardTitle>
          <CardDescription>Gestión completa de infraestructura y automatización</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            {devopsAchievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-1 right-1 w-6 h-6 bg-blue-100/50 rounded-full blur-sm"></div>
                  <Icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-700 font-mono">{achievement.count}</div>
                  <div className="text-sm font-medium text-blue-900 mt-1">{achievement.title}</div>
                  <div className="text-xs text-blue-600 mt-2">{achievement.description}</div>
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                <Cloud className="h-4 w-4" />
                Infraestructura Cloud
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Arquitectura multi-cloud (AWS/GCP) escalable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Containerización con Docker y Kubernetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Load balancing y auto-scaling configurado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Backup automático y disaster recovery</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Automatización & CI/CD
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Pipelines automatizados con GitHub Actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Testing automatizado y quality gates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Despliegues zero-downtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Monitoreo 24/7 con alertas inteligentes</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mentoría y Soporte */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-full blur-xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-green-600" />
            Liderazgo Técnico y Mentoría
          </CardTitle>
          <CardDescription>Formación del equipo y transferencia de conocimiento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-900 flex items-center gap-2">
                <HeadphonesIcon className="h-4 w-4" />
                Soporte Técnico 24/7
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Resolución de incidencias críticas en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Debugging avanzado y optimización de performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Mantenimiento preventivo de sistemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Documentación técnica y procedimientos</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-900 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Formación y Mentoría
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Sesiones individuales de mentoría técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Workshops internos sobre nuevas tecnologías</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Code reviews constructivos y formativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Onboarding técnico para nuevos miembros</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {mentorshipAchievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-1 right-1 w-6 h-6 bg-green-100/50 rounded-full blur-sm"></div>
                <div className="text-2xl font-bold text-green-700 font-mono relative z-10">{achievement.count}</div>
                <div className="text-sm font-medium text-green-900 mt-1">{achievement.title}</div>
                <div className="text-xs text-green-600 mt-2">{achievement.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Open Source & Projects */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100/20 to-teal-100/20 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Globe className="h-5 w-5 text-green-600" />
            Proyectos Open Source y Contribuciones
          </CardTitle>
          <CardDescription>Impacto en la comunidad de desarrollo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-green-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-1 right-1 w-6 h-6 bg-green-100/50 rounded-full blur-sm"></div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h5 className="font-semibold text-green-900">vue-instant</h5>
                <Badge className="bg-green-100 text-green-700 text-xs">Popular</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-700">Descargas Semanales</span>
                  <span className="font-bold text-green-800">3,000+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-700">GitHub</span>
                  <span className="font-mono text-green-800">santiblanko</span>
                </div>
                <p className="text-xs text-green-600 mt-2">
                  Librería Vue.js de alto impacto en la comunidad de desarrollo
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-1 right-1 w-6 h-6 bg-green-100/50 rounded-full blur-sm"></div>
              <h5 className="font-semibold text-green-900 mb-3">Contribuciones Técnicas</h5>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Participación activa en comunidades locales de software</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Desarrollo de herramientas open source</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Mentorías y workshops técnicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Documentación técnica para la comunidad</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Impacto en la Comunidad</h5>
            <p className="text-sm text-green-700 leading-relaxed">
              Con más de <strong>3,000 descargas semanales</strong> de vue-instant y participación activa en comunidades
              de desarrollo, demuestro un compromiso sólido con el ecosistema open source y la transferencia de
              conocimiento técnico.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Awards & Recognition */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-amber-100/30 to-yellow-100/30 rounded-full blur-xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-amber-600" />
            Reconocimientos y Logros Destacados
          </CardTitle>
          <CardDescription>Premios y reconocimientos profesionales</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-amber-900">Premios y Reconocimientos</h4>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-amber-100/50 rounded-full blur-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <h5 className="font-semibold text-amber-900">Premios Ámbar 2016 - Sector Eléctrico</h5>
                    <Badge className="bg-amber-100 text-amber-700 text-xs">Premiado</Badge>
                  </div>
                  <p className="text-xs text-amber-700 mb-2">
                    ÁMBAR 2016 a la investigación y desarrollo del Sector Eléctrico Colombiano
                  </p>
                  <p className="text-xs text-amber-600">
                    Reconocimiento por Geolcoe - Sistema geoespacial para UPME-UDEA-GIMEL
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-amber-100/50 rounded-full blur-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h5 className="font-semibold text-amber-900">Reconocimiento Universidad Catolica Luis Amigo 2019</h5>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Alma Mater</Badge>
                  </div>
                  <p className="text-xs text-amber-700 mb-2">
                    Reconocimiento Universidad Catolica Luis Amigo 
                  </p>
                  <p className="text-xs text-amber-600">
                    <a
                      href="https://www.funlam.edu.co/uploads/documentosjuridicos/1645_Resolucion-No-42-de_2018.pdf"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      Ver Acta
                    </a>
                  </p>
                </div>


                <div className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-amber-100/50 rounded-full blur-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h5 className="font-semibold text-amber-900">Publicación IEEE</h5>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Investigación</Badge>
                  </div>
                  <p className="text-xs text-amber-700 mb-2">
                    Software publicado en paper de IEEE
                  </p>
                  <p className="text-xs text-amber-600">
                    <a
                      href="https://ieeexplore.ieee.org/document/7381171/"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      Ver publicación en IEEE Xplore
                    </a>
                  </p>
                </div>


              </div>
            </div>
            

            <div className="space-y-4">
              <h4 className="font-semibold text-amber-900">Proyectos Destacados</h4>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-amber-100/50 rounded-full blur-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h5 className="font-semibold text-amber-900">Geolcoe - Creador</h5>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Desarrollador Principal</Badge>
                  </div>
                  <p className="text-xs text-amber-700 mb-2">Plataforma geoespacial innovadora</p>
                  <p className="text-xs text-amber-600">Sistema GIS avanzado para análisis territorial y cartografía</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-amber-100/50 rounded-full blur-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <h5 className="font-semibold text-amber-900">ArmCare Escalabilidad</h5>
                    <Badge className="bg-purple-100 text-purple-700 text-xs">25K+ Usuarios</Badge>
                  </div>
                  <p className="text-xs text-amber-700 mb-2">Optimización de performance y escalabilidad</p>
                  <p className="text-xs text-amber-600">Solución de problemas críticos en aplicación de salud</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional References */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-slate-100/20 to-gray-100/20 rounded-full blur-xl"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <Users className="h-5 w-5 text-slate-600" />
            Referencias Profesionales
          </CardTitle>
          <CardDescription>Contactos académicos y profesionales de referencia</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <h5 className="font-semibold text-slate-900 mb-2">Jhon Fernando Escobar</h5>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>Ex Rector Politécnico</p>
                  <p>Ex Jefe Plan Departamental de Agua</p>
                  <p>Post Doctorado Ingeniería de Petróleos</p>
                  <p className="font-mono text-slate-600">📞 300 652 0029</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <h5 className="font-semibold text-slate-900 mb-2">Julian Giraldo</h5>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>Profesor SIG San Buenaventura</p>
                  <p>Ex Director de Sistemas USB</p>
                  <p>Magíster</p>
                  <p className="font-mono text-slate-600">📞 301 285 8725</p>
                  <p className="text-xs">
                    <a
                      href="https://co.linkedin.com/in/juliangiraldo"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <h5 className="font-semibold text-slate-900 mb-2">Nixon Aristizábal</h5>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>Profesor UdeA Sistemas</p>
                  <p>Magíster</p>
                  <p className="font-mono text-slate-600">📞 301 411 17 98</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <h5 className="font-semibold text-slate-900 mb-2">Diego Mejía</h5>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>Profesor Ingeniería Eléctrica UdeA</p>
                  <p>Doctor</p>
                  <p className="font-mono text-slate-600">📞 (+574) 219 8559</p>
                  <p className="font-mono text-slate-600">✉️ diego.mejia@udea.edu.co</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg border border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">Información de Contacto</h5>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div>
                  <p><strong>Santiago Blanco Vilchez</strong></p>
                  <p>Senior DevOps Engineer & Technical Mentor</p>
                  <p>Medellín, Colombia</p>
                </div>
                <div>
                  <p className="font-mono">📞 Disponible bajo solicitud</p>
                  <p className="font-mono">✉️ Disponible bajo solicitud</p>
                  <p className="font-mono">🔗 GitHub: santiblanko</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>



      {/* Signature Section */}
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/80 to-slate-300/80"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="text-sm text-slate-600 font-mono">Documento preparado por:</div>
              <div className="text-3xl font-bold text-slate-900 font-mono tracking-wide bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                SANTIAGO BLANCO
              </div>
              <div className="text-sm text-slate-700 font-medium">Senior DevOps Engineer & Technical Mentor</div>
              <div className="text-xs text-slate-500 font-mono">
                Clara.care Development Team | Infrastructure & Mentorship Lead
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-600">Disponible para reunión</span>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-xs text-slate-500 font-mono">Versión: 1.0</div>
              <div className="text-xs text-slate-500 font-mono">Fecha: {new Date().toLocaleDateString("es-ES")}</div>
              <div className="text-xs text-slate-500 font-mono">Status: CONFIDENCIAL</div>
              <div className="text-xs text-slate-400 font-mono mt-2">Credenciales: sblanco/devops2024</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-400">
            <div className="text-xs text-slate-600 text-center font-mono">
              Este documento contiene información confidencial de Soluntech y está destinado únicamente para uso
              interno. Acceso restringido a personal autorizado.
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              <div
                className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Video Recognition - Después del header */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-lg"></div>
        <CardHeader>
          <CardTitle className="font-mono tracking-wide flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Reconocimiento Gubernamental - Trabajo por Colombia
          </CardTitle>
          <CardDescription>Presentación oficial con el Gobernador de Antioquia - 2012</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src="https://sjc.microlink.io/sOEciZcvyH_UMdBkkrLtA1N07SWD-yXdPOp8v8P56Eg3KDEuB1S7wnm1_c9KByr52mWoS3GDBeWo_mFrzBPKOQ.jpeg"
                alt="Presentación con Gobernador de Antioquia 2012"
                className="w-full rounded-lg border border-blue-200 shadow-sm"
              />
              <div className="text-center">
                <a
                  href="https://youtu.be/E1OAPRJc0iw?si=T309utcrLDrA__GR&t=2942"
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm font-medium"
                  rel="noreferrer"
                >
                  🎥 Ver presentación completa en YouTube
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-900">Contexto del Reconocimiento</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Presentación oficial ante el Gobernador de Antioquia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Reconocimiento por contribuciones al desarrollo tecnológico</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Trabajo destacado en servicios públicos y energía</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Compromiso demostrado con el desarrollo de Colombia</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>




    </div>
  )\
}
