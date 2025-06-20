"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Eye, EyeOff } from "lucide-react"

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (username === "sblanco" && password === "devops2024") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Credenciales incorrectas. Contacte al administrador.")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin()
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6 relative">
        {/* Partículas flotantes - con z-index bajo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400/40 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-300/20 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
        </div>

        {/* Background decorativo - con z-index bajo */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Card principal - con z-index alto */}
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative z-50">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-slate-900 font-mono">ACCESO RESTRINGIDO</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Documento confidencial - Solo personal autorizado
              </CardDescription>
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <div className="text-xs text-blue-800 font-medium">👨‍💻 Santiago Blanco</div>
                <div className="text-xs text-blue-600 mt-1">Senior DevOps Engineer & Technical Mentor</div>
                <div className="text-xs text-blue-500 mt-1">Especialista en Arquitectura Cloud & Formación Técnica</div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 relative z-50">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-slate-700">
                  Usuario
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-11 relative z-50"
                  placeholder="Ingrese usuario"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10 relative z-50"
                    placeholder="Ingrese contraseña"
                    onKeyPress={handleKeyPress}
                    autoComplete="current-password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent z-50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-slate-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium shadow-lg relative z-50"
              >
                Acceder al Documento
              </Button>
            </form>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg relative z-50">
                <p className="text-sm text-red-600 text-center">{error}</p>
              </div>
            )}

            <div className="text-center pt-4 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xs text-slate-600 font-medium">Propuesta de Compensación Técnica</p>
              </div>
              <p className="text-xs text-slate-500 font-mono">Santiago Blanco | DevOps & Mentorship Lead</p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Versión 1.0 | {new Date().toLocaleDateString("es-ES")} | CONFIDENCIAL
              </p>
              <div className="mt-2 flex justify-center gap-1">
                <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
