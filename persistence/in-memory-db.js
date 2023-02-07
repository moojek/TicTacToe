class InMemoryDb {
    #rooms = {}

    getIdForName(name) {
        return name.replaceAll(/\W/g, '')
    }

    isNameAvailable(name) {
        return !(this.getIdForName(name) in this.#rooms)
    }

    isRoomActive(id) {
        return id in this.#rooms
    }

    addRoom(name) {
        if (this.isNameAvailable(name)) {
            this.#rooms[this.getIdForName(name)] = name
            return true
        }
        return false
    }

    getActiveRoomsNames() {
        return Object.entries(this.#rooms).map(([, value]) => value)
    }

    removeRoom(id) {
        if (id in this.#rooms) {
            delete this.#rooms[id]
            return true
        }
        return false
    }
}

const inMemoryDb = new InMemoryDb()

module.exports = inMemoryDb