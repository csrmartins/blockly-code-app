<!-- Modal -->
  <% if(foundProject) { %>
    <form action="/projects/new/<%= foundProject._id%>?_method=PUT" method="POST">
  <% } else { %>
    <form action="/projects/new" method="POST">
  <% } %>
    <div class="modal fade" id="saveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="saveModalLabel">Salvar Projeto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="email">Nome do Projeto:</label>
                <% if(foundProject) { %>
                  <input type="text" class="form-control" name="name" value="<%= foundProject.name %>"required /><br>
                <% } else {%>
                  <input type="text" class="form-control" name="name" value=""required /><br>
                <% } %>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary" >Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </form>
