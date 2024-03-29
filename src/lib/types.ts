interface Label {
    name: string
    color: string
}

interface Issue {
    id: string
    title: string
    number: number
    body: string
    html_url: string
    labels: Label[]
}

interface Filter {
    difficulty?: string
    lang?: string
    length?: string
    project?: string
}

