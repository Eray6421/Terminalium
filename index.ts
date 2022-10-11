// Libraries

import Chalk from 'chalk'

// Exports

export const Info = Content => {
    console.log (Chalk.blueBright (`${Chalk.bold ('   INFO ⇒')} ${Content}`))
}

export const Success = Content => {
    console.log (Chalk.greenBright (`${Chalk.bold ('SUCCESS ⇒')} ${Content}`))
}

export const Warn = Content => {
    console.log (Chalk.yellowBright (`${Chalk.bold ('WARNING ⇒')} ${Content}`))
}

export const Error = Content => {
    console.log (Chalk.redBright (`${Chalk.bold ('  ERROR ⇒')} ${Content}`))
}