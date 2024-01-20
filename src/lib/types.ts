interface Label {
    name: string
    color: string
}

interface Issue {
    id: string
    name: string
    number: number
    body: string
    labels: Label[]
}

