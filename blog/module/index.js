class Base {
    constructor(data, msg) {
        if (typeof data === 'string') {
            this.msg = data
            return
        }
        if (data) {
            this.data = data;
            return;
        }
        if (msg) {
            this.msg = msg
        }
    }
}

class Success extends Base {
    constructor(data, msg) {
        super(data, msg)
        this.code = '0'
    }
}

class Error extends Base {
    constructor(data, msg) {
        super(data, msg)
        this.code = '-1'
    }
}

module.exports =  {
    Success, Error
}