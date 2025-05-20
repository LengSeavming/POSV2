// ================================================================>> Core Library (Angular)
import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// ================================================================>> Third-Party Libraries
import { MatIconModule } from '@angular/material/icon';

// ================================================================>> Custom Libraries (Application-specific)
import { env } from 'envs/env';
import { Pet, Product } from '../order.types';


@Component({

    selector: 'product-item',
    standalone: true,
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [

        MatIconModule,
        DecimalPipe
    ],
})
export class ItemComponent {

    @Input() data: Product;
    @Input() petdata: Pet;
    @Output() result = new EventEmitter<Product>;
    // @Output() petresult = new EventEmitter<Pet>;
    public fileUrl: string = env.FILE_BASE_URL;

    onOutput() {
        this.result.emit(this.data);
        // this.petresult.emit(this.petdata);
    }

}
