import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot()
    ],
    providers: [],
    exports: [],
})
export default class UserModule {}