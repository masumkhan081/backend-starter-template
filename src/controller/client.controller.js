const ClientService = require("../services/client.service");
const httpStatus = require("http-status");

async function createClient(req, res) {
  const result = await ClientService.createClient(req.body);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Client Created successfully",
    data: result,
  });
}
async function getClients(req, res) {
  const result = await ClientService.getClients();
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Clients fetched successfully",
    data: result,
  });
}
async function updateClients(req, res) {
  const result = await shopServices.getShops();
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Shop fetched successfully",
    data: result,
  });
}
async function deleteClient(req, res) {
  const result = await shopServices.getShops();
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Shop fetched successfully",
    data: result,
  });
}

module.exports = { createClient, updateClients, deleteClient, getClients };
