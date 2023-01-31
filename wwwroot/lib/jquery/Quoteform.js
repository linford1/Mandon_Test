<script type = "text/javascript">

    $( document ).ready(function() {
        $('#submitQuoteFormBtn').on('click', function (e) {
            e.preventDefault(); //prevent the form from being submitted

            $(this).prop('disabled', true);
             
            var form = $('#createQuoteForm');
            $.ajax({
                url: form.get(0).action,
                type: form.get(0).method,
                data: form.serialize(),
                success: function (result) {
                    $('#submitQuoteFormBtn').removeAttr('disabled');  
                }
            });
        });

        $(document).ajaxSuccess(function( event, xhr, settings ) {
            var splitResponse = xhr.responseText.split(",")
            var OS = splitResponse[2].split(":") 

            console.log("User Agent: " +OS[1] + ", " + splitResponse[3].replace("}",""));

            alert("We have recieved your form")
            document.getElementById("createQuoteForm").reset();
        });

        $("#FlatRoofCheckBox").change(function () {
            if (this.checked) {
                $("#FlatRoofSize").attr("hidden", false)
            }
            else {
                $("#FlatRoofSize").val("")
                $("#FlatRoofSize").attr("hidden","hidden")
            }
        });
    });
  </script>

<style>
    Button#submitQuoteFormBtn:hover {
        background-color: #4c9ed9;
    }
</style>