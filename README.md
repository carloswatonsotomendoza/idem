# To-Do Clean Architecture Example

Este repositorio contiene una aplicación simple de gestión de tareas (To-Do), desarrollada como ejercicio técnico para demostrar buenas prácticas de desarrollo de software a nivel senior.

El foco del proyecto no es la complejidad funcional, sino la calidad del diseño, la arquitectura, los tests y las decisiones técnicas.

## Objetivos del ejercicio

El proyecto busca demostrar:

- Correctitud funcional
- Aplicación de TDD
- Principios SOLID
- Programación orientada a objetos
- Arquitectura limpia (Clean Architecture)
- Commits atómicos y bien descriptivos
- Código legible y mantenible
- Configuración básica de CI

## Arquitectura

El proyecto está organizado como un monorepo con dos aplicaciones:

- backend: Node.js + TypeScript (API)
- frontend: React + TypeScript

Backend

El backend sigue una estructura de Clean Architecture:

- Domain: entidades y reglas de negocio
- Application: casos de uso
- Infrastructure: implementación de repositorios
- API: capa HTTP (Express)

Las dependencias siempre apuntan hacia el dominio, cumpliendo el Principio de Inversión de Dependencias (DIP).

Frontend

El frontend es una aplicación React simple que consume la API vía fetch, separa la lógica de red en una capa de servicios y mantiene componentes pequeños y legibles.

## Testing

- Se aplica TDD en el dominio y los casos de uso
- Se utilizan tests unitarios con Jest
- La lógica de negocio está completamente testeada
- La API se mantiene delgada y sin lógica compleja

## Cómo ejecutar el proyecto

Backend

cd backend
npm install
npm run dev

API disponible en:
http://localhost:3000

Frontend

cd frontend
npm install
npm run dev

Aplicación disponible en:
http://localhost:5173

Endpoints disponibles

POST /tasks → Crear tarea  
GET /tasks → Listar tareas  
PATCH /tasks/:id/complete → Completar tarea

Autor

Carlos Andrés Soto
