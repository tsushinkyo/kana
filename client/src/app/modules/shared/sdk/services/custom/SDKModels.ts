/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Thing } from '../../models/Thing';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Thing: Thing,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
