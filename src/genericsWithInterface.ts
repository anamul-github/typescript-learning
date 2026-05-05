interface Developer <T, X=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    },
    smartWatch: T;
    bike?: X;
}

interface NoBrandWatch {
    heartRate: string;
    stopwatch: boolean;
}

interface AppleWatch {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}

const poorDeveloper: Developer<NoBrandWatch, {brand: 'Yamaha', engineCapacity:'200cc'}> = {
    name: 'Mr poor',
    salary: 20,
    device: {
        brand: 'lenovo',
        model: 'A21',
        releaseYear: '2010'
    },
    smartWatch: {
        heartRate: '100',
        stopwatch: true
    }
};

const richDeveloper: Developer<AppleWatch> = {
    name: 'Mr rich',
    salary: 100,
    device: {
        brand: 'Apple',
        model: 'Series 10',
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: '100',
        callSupport: true,
        calculator: true,
        AiFeature: true,
    },
    bike: null
};