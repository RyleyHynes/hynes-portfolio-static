import type { RouteModel } from '@/features/api/celiumRoutes'

export type PlanStatus = 'Draft' | 'Planned' | 'Completed'
export type ChecklistStatus = 'NotStarted' | 'InProgress' | 'Done'
export type ActivityType = 'Task' | 'Route'

export type PlanActivity = {
  id: string
  dayId: string
  order: number
  title: string
  type: ActivityType
  notes?: string
  routeId?: string
}

export type PlanDay = {
  id: string
  order: number
  title: string
  notes?: string
  activities: PlanActivity[]
}

export type ChecklistItem = {
  id: string
  category: string
  label: string
  status: ChecklistStatus
}

export type PlanModel = {
  id: string
  name: string
  status: PlanStatus
  createdAt: string
  updatedAt: string
  metadata: {
    attachedRouteIds: string[]
    confidence?: number
    startDate?: string
    endDate?: string
    reflection?: string
  }
  days: PlanDay[]
  checklistItems: ChecklistItem[]
  notes: {
    TripNotes: string
    PackingNotes: string
    RisksUnknowns: string
    RemainingQuestions: string
  }
  conditions: {
    forecastSummary: string
    seasonalContext: string
    recentObservations: string
  }
}

export const mapRouteToActivity = (route: RouteModel, dayId: string, order: number): PlanActivity => ({
  id: `activity-${route.id}`,
  dayId,
  order,
  title: route.name,
  type: 'Route',
  routeId: route.id,
  notes: route.summary,
})
