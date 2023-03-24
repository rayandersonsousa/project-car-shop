import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

abstract class AbstractODM<R> {
  protected model: Model<R>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: R): Promise<R> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<R[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<R | null> {
    return this.model.findById(id);
  }
  
  public async update(_id: string, data: IVehicle): Promise<R | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...data } as UpdateQuery<IVehicle>,
      { new: true },
    );
  }
}

export default AbstractODM;