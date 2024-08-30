const button1 = document.getElementById("button-answer-1")
const button2 = document.getElementById("button-answer-2")
const button3 = document.getElementById("button-answer-3")
const button4 = document.getElementById("button-answer-4")
const button5 = document.getElementById("button-answer-5")

const answer1 = document.getElementById("answer-1")
const answer2 = document.getElementById("answer-2")
const answer3 = document.getElementById("answer-3")
const answer4 = document.getElementById("answer-4")
const answer5 = document.getElementById("answer-5")

const fullAnswer1 = document.getElementById("full-answer-1")
const fullAnswer2 = document.getElementById("full-answer-2")
const fullAnswer3 = document.getElementById("full-answer-3")
const fullAnswer4 = document.getElementById("full-answer-4")
const fullAnswer5 = document.getElementById("full-answer-5")

function getAnswer1 () {
    let indice = 13
    let soma = 0
    let k = 0

    while (k < indice) {
        k++
        soma = soma + k
    }

    const basicAnswer = document.createElement('p')

    basicAnswer.textContent = soma

    answer1.appendChild(basicAnswer)
    button1.disabled = true

    const fullAnswerButton = document.createElement('button')
    fullAnswerButton.textContent = 'Ver código Javascript'
    fullAnswerButton.onclick = function() {
        getFullAnswer1(fullAnswerButton)
    }

    fullAnswer1.appendChild(fullAnswerButton)
}

function getFullAnswer1(button) {
    const fullAnswerCode = document.createElement('pre')
    fullAnswerCode.textContent = `
        let indice = 13
        let soma = 0
        let k = 0

        while (k < indice) {
            k++
            soma = soma + k
        }
    `

    fullAnswer1.appendChild(fullAnswerCode)
    button.disabled = true
}

function getAnswer2 () {
    const form = document.getElementById('fibonacci-form')
    const checkFibonacciDiv = document.getElementById('fibonacci-check')

    function isFibonacciNumber(number) {
        if (number === 0 || number === 1) return true

        let prev = 0
        let curr = 1

        while (curr < number) {
            const next = prev + curr
            prev = curr
            curr = next
        }

        return curr === number
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const numberInput = parseInt(document.getElementById('number-input').value)

        checkFibonacciDiv.innerHTML = ''

        const checkFibonacciParagraph = document.createElement('p')

        setTimeout(() => {
            checkFibonacciParagraph.textContent = `O número que você digitou ${isFibonacciNumber(numberInput) === true ? 'pertence' : 'não pertence'} à Sequência de Fibonacci!`
        }, 400);

        checkFibonacciDiv.appendChild(checkFibonacciParagraph)
    })
}

function getFullAnswer2() {
    const fullAnswerCode = document.createElement('pre')
    fullAnswerCode.textContent = `
        function getAnswer2 () {
            const form = document.getElementById('fibonacci-form')
            const checkFibonacciDiv = document.getElementById('fibonacci-check')

            function isFibonacciNumber(number) {
                if (number === 0 || number === 1) return true

                let prev = 0
                let curr = 1

                while (curr < number) {
                    const next = prev + curr
                    prev = curr
                    curr = next
                }

                return curr === number
            }

            form.addEventListener('submit', function (e) {
                e.preventDefault()

                const numberInput = parseInt(document.getElementById('number-input').value)

                checkFibonacciDiv.innerHTML = ''

                const checkFibonacciParagraph = document.createElement('p')

                setTimeout(() => {
                    checkFibonacciParagraph.textContent = \`O número que você digitou \${isFibonacciNumber(numberInput) === true ? 'pertence' : 'não pertence'} à Sequência de Fibonacci!\`
                }, 400);

                checkFibonacciDiv.appendChild(checkFibonacciParagraph)
            })
        }
    `

    fullAnswer2.appendChild(fullAnswerCode)
    button2.disabled = true
}

const minorButton = document.getElementById('minor-invoice')
const majorButton = document.getElementById('major-invoice')
const averageButton = document.getElementById('average-invoice')

function calculateInvoice(invoice) {
    const valores = Object.values(invoice).filter(v => v > 0)

    if (valores.length === 0) {
        return {
            menor_valor: null,
            maior_valor: null,
            dias_acima_da_media: 0
        }
    }

    const menor_valor = Math.min(...valores)
    const maior_valor = Math.max(...valores)

    const media_mensal = valores.reduce((sum, v) => sum + v, 0) / valores.length

    const dias_acima_da_media = valores.filter(v => v > media_mensal).length

    return {
        menor_valor,
        maior_valor,
        dias_acima_da_media
    }
}

const invoice = {
    "2024-08-01": 1500,
    "2024-08-02": 2000,
    "2024-08-03": 0,
    "2024-08-04": 0,
    "2024-08-05": 1800,
    "2024-08-06": 2200,
    "2024-08-07": 2500,
    "2024-08-08": 1900,
    "2024-08-09": 1700,
    "2024-08-10": 0,
    "2024-08-11": 0,
    "2024-08-12": 4500,
    "2024-08-13": 2500,
    "2024-08-14": 5100,
    "2024-08-15": 1600,
    "2024-08-16": 1000,
    "2024-08-17": 0,
    "2024-08-18": 0,
    "2024-08-19": 1800,
    "2024-08-20": 1250,
    "2024-08-21": 2400,
    "2024-08-22": 1900,
    "2024-08-23": 2000,
    "2024-08-24": 0,
    "2024-08-25": 0,
    "2024-08-26": 2100,
    "2024-08-27": 4550,
    "2024-08-28": 2200,
    "2024-08-29": 2500,
    "2024-08-30": 1800,
    "2024-08-31": 0
}

function seeData() {
    const seeData = document.getElementById('see-data')

    seeData.innerHTML = ''

    for (const [date, amount] of Object.entries(invoice)) {
        const p = document.createElement('p')
        p.textContent = `${date}: ${amount}`
        seeData.appendChild(p)
    }
}

minorButton.addEventListener('click', function () {
    const minorValue = calculateInvoice(invoice).menor_valor

    answer3.innerHTML = ''

    const p = document.createElement('p')
    p.textContent = minorValue

    answer3.appendChild(p)
})

majorButton.addEventListener('click', function () {
    const majorValue = calculateInvoice(invoice).maior_valor

    answer3.innerHTML = ''

    const p = document.createElement('p')
    p.textContent = majorValue

    answer3.appendChild(p)
})

averageButton.addEventListener('click', function () {
    const averageValue = calculateInvoice(invoice).dias_acima_da_media

    answer3.innerHTML = ''

    const p = document.createElement('p')
    p.textContent = averageValue

    answer3.appendChild(p)
})

function getFullAnswer3() {
    const fullAnswerCode = document.createElement('pre')
    fullAnswerCode.textContent = `
        const minorButton = document.getElementById('minor-invoice')
        const majorButton = document.getElementById('major-invoice')
        const averageButton = document.getElementById('average-invoice')

        function calculateInvoice(invoice) {
            const valores = Object.values(invoice).filter(v => v > 0)

            if (valores.length === 0) {
                return {
                    menor_valor: null,
                    maior_valor: null,
                    dias_acima_da_media: 0
                }
            }

            const menor_valor = Math.min(...valores)
            const maior_valor = Math.max(...valores)

            const media_mensal = valores.reduce((sum, v) => sum + v, 0) / valores.length

            const dias_acima_da_media = valores.filter(v => v > media_mensal).length

            return {
                menor_valor,
                maior_valor,
                dias_acima_da_media
            }
        }

        const invoice = {
            "2024-08-01": 1500,
            "2024-08-02": 2000,
            "2024-08-03": 0,
            "2024-08-04": 0,
            "2024-08-05": 1800,
            "2024-08-06": 2200,
            "2024-08-07": 2500,
            "2024-08-08": 1900,
            "2024-08-09": 1700,
            "2024-08-10": 0,
            "2024-08-11": 0,
            "2024-08-12": 4500,
            "2024-08-13": 2500,
            "2024-08-14": 5100,
            "2024-08-15": 1600,
            "2024-08-16": 1000,
            "2024-08-17": 0,
            "2024-08-18": 0,
            "2024-08-19": 1800,
            "2024-08-20": 1250,
            "2024-08-21": 2400,
            "2024-08-22": 1900,
            "2024-08-23": 2000,
            "2024-08-24": 0,
            "2024-08-25": 0,
            "2024-08-26": 2100,
            "2024-08-27": 4550,
            "2024-08-28": 2200,
            "2024-08-29": 2500,
            "2024-08-30": 1800,
            "2024-08-31": 0
        }

        function seeData() {
            const seeData = document.getElementById('see-data')

            seeData.innerHTML = ''

            for (const [date, amount] of Object.entries(invoice)) {
                const p = document.createElement('p')
                p.textContent = \`\${date}: \${amount}\`
                seeData.appendChild(p)
            }
        }

        minorButton.addEventListener('click', function () {
            const minorValue = calculateInvoice(invoice).menor_valor

            answer3.innerHTML = ''

            const p = document.createElement('p')
            p.textContent = minorValue

            answer3.appendChild(p)
        })

        majorButton.addEventListener('click', function () {
            const majorValue = calculateInvoice(invoice).maior_valor

            answer3.innerHTML = ''

            const p = document.createElement('p')
            p.textContent = majorValue

            answer3.appendChild(p)
        })

        averageButton.addEventListener('click', function () {
            const averageValue = calculateInvoice(invoice).dias_acima_da_media

            answer3.innerHTML = ''

            const p = document.createElement('p')
            p.textContent = averageValue

            answer3.appendChild(p)
        })
    `

    fullAnswer3.appendChild(fullAnswerCode)
    button3.disabled = true
}

function calculatePercentage () {
    const monthlyInvoice = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    }

    let totalValue = Object.values(monthlyInvoice).reduce((acc, valor) => acc + valor, 0)

    const percentage = {}
    for (const [state, value] of Object.entries(monthlyInvoice)) {
        percentage[state] = ((value / totalValue) * 100).toFixed(2) + '%'
    }

    return percentage
}

function getAnswer4 () {
    const percentage = calculatePercentage()

    answer4.innerHTML = ''

    for (const [state, values] of Object.entries(percentage)) {
        const basicAnswer = document.createElement('p')
        basicAnswer.textContent = `${state}: ${values}`
        answer4.appendChild(basicAnswer)
    }

    const fullAnswerButton = document.createElement('button')
    fullAnswerButton.textContent = 'Ver código Javascript'
    fullAnswerButton.onclick = function() {
        getFullAnswer4(fullAnswerButton)
    }

    fullAnswer4.appendChild(fullAnswerButton)
    button4.disabled = true
}

function getFullAnswer4(button) {
    const fullAnswerCode = document.createElement('pre')
    fullAnswerCode.textContent = `
        function calculatePercentage () {
            const monthlyInvoice = {
                "SP": 67836.43,
                "RJ": 36678.66,
                "MG": 29229.88,
                "ES": 27165.48,
                "Outros": 19849.53
            }

            let totalValue = Object.values(monthlyInvoice).reduce((acc, valor) => acc + valor, 0)

            const percentage = {}
            for (const [state, value] of Object.entries(monthlyInvoice)) {
                percentage[state] = ((value / totalValue) * 100).toFixed(2) + '%'
            }

            return percentage
        }

        function getAnswer4 () {
            const percentage = calculatePercentage()

            answer4.innerHTML = ''

            for (const [state, values] of Object.entries(percentage)) {
                const basicAnswer = document.createElement('p')
                basicAnswer.textContent = \`\${state}: \${values}\`
                answer4.appendChild(basicAnswer)
            }

            button4.disabled = true
        }
    `

    fullAnswer4.appendChild(fullAnswerCode)
    button.disabled = true
}

function getAnswer5 () {
    const form = document.getElementById('reverse-string')

    function reverseString(string) {
        let reversed = ''

        for (let i = string.length - 1; i >= 0; i--) {
            reversed += string[i]
        }

        return reversed
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const input = document.getElementById('invert-string').value

        const reversedString = reverseString(input)

        answer5.innerHTML = ''

        const getStringReversed = document.createElement('p')
        getStringReversed.textContent = "Texto invertido: " + reversedString

        answer5.appendChild(getStringReversed)
    })

}

function getFullAnswer5() {
    const fullAnswerCode = document.createElement('pre')
    fullAnswerCode.textContent = `
        function getAnswer5 () {
            const form = document.getElementById('reverse-string')

            function reverseString(string) {
                let reversed = ''

                for (let i = string.length - 1; i >= 0; i--) {
                    reversed += string[i]
                }

                return reversed
            }

            form.addEventListener('submit', function (e) {
                e.preventDefault()

                const input = document.getElementById('invert-string').value

                const reversedString = reverseString(input)

                answer5.innerHTML = ''

                const getStringReversed = document.createElement('p')
                getStringReversed.textContent = "Texto invertido: " + reversedString

                answer5.appendChild(getStringReversed)
            })
        }
    `

    fullAnswer5.appendChild(fullAnswerCode)
    document.getElementById('full-answer-5-button').disabled = true
}
