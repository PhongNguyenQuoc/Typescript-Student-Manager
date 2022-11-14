import 'reflect-metadata'
import app from './app'
import {AppDataSource} from '../src/config/DB.Config'

async function main() {
    // Add headers

    try {
        await AppDataSource.initialize()
        console.log("Database is connected")
        app.listen(3000)
        console.log("server listening on port 3000")
    }
    catch(error) {
        console.error(error)
    }
    
}

main()