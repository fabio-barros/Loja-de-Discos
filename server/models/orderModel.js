import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    pedido: {
        nome: { type: String, required: true },
        quantidade: { type: Number, required: true },
        imagem: { type: String, required: true },
        preco: { type: Number, required: true },
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
    },
    enderecoEntrega: {
        endereco: { type: String, required: true },
        cidade: { type: String, required: true },
        cep: { type: String, required: true },
    },
    metodoPagamento: {
        type: String,
        required: true,
    },
    resultadoPagamento: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email: { type: String },
    },
    imposto: {
        type: Number,
        requited: true,
        default: 0.0,
    },
    frete: {
        type: Number,
        requited: true,
        default: 0.0,
    },
    valorTotal: {
        type: String,
        required: true,
    },
    statusPagamento: {
        type: Boolean,
        required: true,
        default: false,
    },
    dataPagamento: {
        type: Date,
    },
    statusEntrega: {
        type: Boolean,
        required: true,
        default: false,
    },
    dataEntrega: {
        type: Date,
    },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
