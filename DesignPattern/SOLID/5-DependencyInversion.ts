/*

Entities must depend on abstractions, not on concretions.
It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.
*/

class MySQLConnection {
    public connect() {
        // handle the database connection
        return 'Database connection';
    }
}

class PasswordReminder {
    private dbConnection: MySQLConnection;

    constructor(dbConnection: MySQLConnection) {
        this.dbConnection = dbConnection;
    }
}

/*

First, the MySQLConnection is the low-level module while the PasswordReminder is high level,
but according to the definition of D in SOLID, which states to Depend on abstraction, not on concretions.
This snippet above violates this principle as the PasswordReminder class is being forced to depend on the MySQLConnection class.
Later, if you were to change the database engine, you would also have to edit the PasswordReminder class,
and this would violate the open-close principle.
*/

interface DBConnectionInterface {
    connect: () => string
}

class MySQLConnection implements DBConnectionInterface {
    public connect() {
        // handle the database connection
        return 'Database connection';
    }
}

class PasswordReminder {
    private dbConnection: DBConnectionInterface;

    constructor(dbConnection: DBConnectionInterface) {
        this.dbConnection = dbConnection;
    }
}