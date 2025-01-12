import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { AreaAlmacen } from "./area-almacen";
import { Producto } from "./producto";

@Entity('ubicacion_producto')
export class UbicacionProducto {
    @PrimaryGeneratedColumn({ name: 'id_ubicacion_producto' })
    idUbicacionProducto: number;

    @ManyToOne(() => AreaAlmacen, (areaAlmacen) => areaAlmacen.ubicacionesProducto)
    @JoinColumn({ name: 'id_area_almacen' })
    areaAlmacen: AreaAlmacen;

    @ManyToOne(() => Producto, (producto) => producto.ubicacionesProducto)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ name: 'cantidad' })
    cantidad: number;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}