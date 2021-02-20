interface IChat{
    sendMessage(text:string): boolean;
    end(): boolean;
}

interface IPhone{
    phone_number: string;
    call(phone_number:string): void;
}

interface ISuperPhone extends IPhone{
    callTwo(phone_number1: string, phone_number2: string): IChat;
}

class Phone implements IPhone{
    readonly phone_number: string;

    constructor(number:string){
        this.phone_number = number;
    }

    call(phone_number: string) { 
        console.log(phone_number);
    }
}

class SuperPhone extends Phone implements ISuperPhone{
    callTwo(phone_number1: string, phone_number2: string): IChat{
        return null as any; 
    }
}

let ourPhone = new Phone('0992282280');
ourPhone.call('0661234567');

let newPhone = new SuperPhone('0733034055'); 

let phones: Array<IPhone> = [ourPhone, newPhone];
