import InitialSelectionValues from '@/models/Initial-selection-values';

export default class Selection {
    public selected: boolean = false;
    public name: string;
    public image: any;
    public description: string|undefined;

    constructor(initialValues: InitialSelectionValues) {
        this.name = initialValues.name;
        this.image = initialValues.image;
        this.description = initialValues.description;
    }
}
