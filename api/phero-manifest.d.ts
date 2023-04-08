export abstract class PheroService<TContext = {}> {
}
export class helloWorldService extends PheroService {
    helloWorld(name: string): Promise<string>;
}