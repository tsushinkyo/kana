/* tslint:disable */

declare var Object: any;
export interface ThingInterface {
  "name": string;
  "active"?: boolean;
  "id"?: any;
}

export class Thing implements ThingInterface {
  "name": string;
  "active": boolean;
  "id": any;
  constructor(data?: ThingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Thing`.
   */
  public static getModelName() {
    return "Thing";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Thing for dynamic purposes.
  **/
  public static factory(data: ThingInterface): Thing{
    return new Thing(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Thing',
      plural: 'things',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "active": {
          name: 'active',
          type: 'boolean',
          default: true
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
