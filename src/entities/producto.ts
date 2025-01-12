import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Proveedor } from "./proveedor";
import { Categoria } from "./categoria";
import { UbicacionProducto } from "./ubicacion-producto";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn({ name: 'id_producto' })
    idProducto: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'precio', type: 'numeric' })
    precio: number;

    @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
    @JoinColumn({ name: 'id_proveedor' })
    proveedor: Proveedor;

    @ManyToOne(() => Categoria, (categoria) => categoria.productos)
    @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria;

    @OneToMany(() => UbicacionProducto, (ubicacionProducto) => ubicacionProducto.producto)
    ubicacionesProducto: UbicacionProducto[];

    @Column({ name: 'imagen_url' })
    imagenUrl: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}