type IdType = string

type Model = {
    _id: IdType,
    created_at: Date,
    updated_at: Date
}

type User = Model & {
    username: string,
    password?: string,
    name: string,
}

type Progress = Model & {
    name: string
}

type Reminder = Model & {
    name: string,
    time: { unit: string, amount: number }[]
}

type Priority = Model & {
    name: string
}

type Label = Model & {
    name: string
}

type Project = Model & {
    title: string,
    description: string,
    owner_id: IdType,
    owner?: User,
    members_id: IdType[],
    members?: User[]
}

type Milestone = Model & {
    project_id: IdType,
    project?: Project,
    title: string,
    description: string,
    target_date: Date
}

type Section = Model & {
    project_id: IdType,
    project?: Project,
    title: string,
    description: string
}

type Task = Model & {
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
