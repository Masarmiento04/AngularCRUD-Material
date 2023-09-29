using Microsoft.EntityFrameworkCore;
using BackEndApi.Models;
using BackEndApi.Services.Contrato;

namespace BackEndApi.Services.Implementacion {
    public class DepartamentoService : IDepartamentoService{
        private readonly DbempleadoContext _dbContext;

        public DepartamentoService(DbempleadoContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<List<Departamento>> GetList() {
            try {
                List<Departamento> lista = new();
                lista = await _dbContext.Departamentos.ToListAsync();

                return lista;
            }
            catch {
                throw;
            }
        }
    }
}
