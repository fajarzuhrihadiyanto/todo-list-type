export type IdType = string

export type Model = {
    _id: IdType,
    created_at: Date,
    updated_at: Date
}

export type User = Model & {
    username: string,
    password?: string,
    name: string,
}

export type Progress = Model & {
    name: string
}

export type Reminder = Model & {
    name: string,
    time: { unit: string, amount: number }[]
}

export type Priority = Model & {
    name: string
}

export type Label = Model & {
    name: string
}

export type Project = Model & {
    title: string,
    description: string,
    owner_id: IdType,
    owner?: User,
    members_id: IdType[],
    members?: User[]
}

export type Milestone = Model & {
    project_id: IdType,
    project?: Project,
    title: string,
    description: string,
    target_date: Date
}

export type Section = Model & {
    project_id: IdType,
    project?: Project,
    title: string,
    description: string
}

export type Task = Model & {
    title: string,
    description: string,
    milestone_id: IdType,
    milestone?: Milestone,
    section_id: IdType,
    section: Section,
    labels_id: IdType[],
    labels?: Label[],
    priority_id: IdType,
    priority?: Priority,
    progress_id: IdType,
    progress?: Progress,
    creator_id: IdType,
    creator?: User,
    assignee_id: IdType,
    assignee?: User,
    histories: { user_id: IdType, user?: User, date: Date, description: string }
}
